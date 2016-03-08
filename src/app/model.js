import { uuid, store } from './util';
import PouchDB from 'pouchdb';

export default class TodoModel {
  constructor(remoteDBURL) {
    var self = this;

    this.remoteDBURL = remoteDBURL;
    this.todos = [];
    this.onChanges = [];
    
    // init
    this.localDB = new PouchDB('todos');
    this.localDB.changes({
      since: 'now',
      live: true
    }).on('change', function () {
      // something change
      console.log('localDB.change');
      self.draw();
      self.syncAndDraw();
    }).on('error', function (err) {
      // totally unhandled error (shouldn't happen)
      console.log('localDB.error : ', err);
    });
    
    // draw with localDB
    this.draw();
    
    // then sync with remoteDB
    this.remoteDB = new PouchDB(this.remoteDBURL);
    this.syncAndDraw();
  }

  draw() {
    var self = this;
    this.localDB.allDocs({ include_docs: true, descending: true }, function (err, doc) {
      var next_todos = doc.rows.map(todo => todo.doc);
      // TODO : dirty check
      self.todos = next_todos;
      self.publish();
    });
  }

  subscribe(fn) {
    this.onChanges.push(fn);
  }

  publish() {
    this.onChanges.forEach(cb => cb());
  }
  
  syncAndDraw() {
    var self = this;
    // sync with remote
    this.localDB.sync(this.remoteDB).on('change', function () {
      // something change
      console.log('remoteDB.change');
      self.draw();
    }).on('remoteDB.paused', function (info) {
      // replication was paused, usually because of a lost connection
      console.log('remoteDB.paused : ', info);
    }).on('active', function (info) {
      // replication was resumed
      console.log('remoteDB.active : ', info);
    }).on('error', function (err) {
      // totally unhandled error (shouldn't happen)
      console.log('remoteDB.error : ', err);
    });
  }

  addTodo(title) {
    var todo = {
      "_id": new Date().toISOString(),
      "title": title,
      "completed": false
    };

    this.localDB.put(todo, function callback(err, result) {
      if (!err) {
        console.log('Successfully posted a todo!');
      }
    });
  }

  toggleAll(completed) {
    this.todos = this.todos.map(
      todo => ({ ...todo, completed })
		);
		this.publish();
	}

  toggle(todoToToggle) {
    todoToToggle.completed = !todoToToggle.completed;
    this.localDB.put(todoToToggle);
  }

  destroy(todo) {
    this.localDB.remove(todo);
  }

  save(todoToSave, title) {
    this.localDB.put(todoToSave);
  }

  clearCompleted() {
    this.completed_todos = this.todos.filter(todo => {
      todo.completed ? todo._deleted = true : false;
      return todo.completed;
    });
    this.localDB.bulkDocs(this.completed_todos);
  }
}
