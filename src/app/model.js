import { uuid, store } from './util';
import * as _LowlaDB from 'lowladb/dist/lowladb';

export default class TodoModel {
  constructor(remoteDBURL) {
    var self = this;

    // Preact
    this.onChanges = [];

    // Todos
    this.todos = [];

    // LowlaDB
    var lowla = this.lowla = new _LowlaDB.LowlaDB({ datastore: 'IndexedDB' });

    lowla.on('pullBegin', function() {
      console.log("Pull beginning");
    });
    lowla.on('pushBegin', function() {
      console.log("Push beginning");
    });
    lowla.on('syncBegin', function() {
      console.log("Sync beginning");
    });
    lowla.on('pullEnd', function() {
      console.log("Pull ended");
    });
    lowla.on('pushEnd', function() {
      console.log("Push ended");
    });
    lowla.on('syncEnd', function() {
      console.log("Sync ended");
    });
    this.todos_collection = lowla.collection('lowlaSample', 'todos');

    // test insert
    /*
    this.todos_collection.insert({
      id: new Date().valueOf(),
      title: "hi",
      completed: false
    });
    */
    
    lowla.sync(location.protocol + '//localhost:3000');
    this.todos_collection.find({}).sort('title').on(function(err, cursor) {
      //this.render(cursor);
      console.log(cursor);
      cursor.showPending().toArray().then(function(todos) {
        console.log(todos);
        self.todos = todos;
        self.draw();
      });

    }.bind(this));

    /*
    // PouchDB
    this.remoteDBURL = remoteDBURL;
    this.localDB = new PouchDB('todos');
    this.localDB.changes({
      since: 'now',
      live: true
    }).on('change', function() {
      // something change
      console.log('localDB.change');
      self.draw();
      self.syncAndDraw();
    }).on('error', function(err) {
      // totally unhandled error (shouldn't happen)
      console.log('localDB.error : ', err);
    });
    */


    // draw with localDB
    this.draw();

    // then sync with remoteDB
    //this.remoteDB = new PouchDB(this.remoteDBURL);
    //this.syncAndDraw();
  }

  draw() {
    var self = this;
    console.log(self.todos);
    self.publish();
    /*
    this.localDB.allDocs({ include_docs: true, descending: true }, function(err, doc) {
      var next_todos = doc.rows.map(todo => todo.doc);
      // TODO : dirty check
      self.todos = next_todos;
      self.publish();
    });
    */
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
    this.localDB.sync(this.remoteDB).on('change', function() {
      // something change
      console.log('remoteDB.change');
      self.draw();
    }).on('remoteDB.paused', function(info) {
      // replication was paused, usually because of a lost connection
      console.log('remoteDB.paused : ', info);
    }).on('active', function(info) {
      // replication was resumed
      console.log('remoteDB.active : ', info);
    }).on('error', function(err) {
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
