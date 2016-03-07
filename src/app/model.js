import { uuid, store } from './util';
import PouchDB from 'pouchdb';

export default class TodoModel {
	constructor(remoteCouch) {
    var self = this;
    
    this.remoteCouch = remoteCouch;
    this.todos = [];
		this.onChanges = [];
    
    // init
    this.db = new PouchDB('todos');
    this.db.changes({
      since: 'now',
      live: true
    }).on('change', function() {self.draw()});

    // sync with remote?
    if (this.remoteCouch) {
      this.sync();
    }
    
    // draw
    this.draw();
	}
  
  draw() {
    var self = this;
    this.db.allDocs({include_docs: true, descending: true}, function(err, doc) {
      self.todos = doc.rows.map( todo => todo.doc );
      self.publish();
    });
  }

	subscribe(fn) {
		this.onChanges.push(fn);
	}

	publish() {
    this.onChanges.forEach( cb => cb() );
	}

	addTodo(title) {
    var todo = {
			"id": new Date().toISOString(),
      "_id": new Date().toISOString(),
			"title": title,
			"completed": false
		};

    this.db.put(todo, function callback(err, result) {
      if (!err) {
        console.log('Successfully posted a todo!');
      }
    });
	}

  // Initialise a sync with the remote server
  sync() {
    console.log('data-sync-state : ', 'syncing');
    var opts = {live: true};
    this.db.replicate.to(this.remoteCouch, opts, this.syncError);
    this.db.replicate.from(this.remoteCouch, opts, this.syncError);
  }

  // There was some form or error syncing
  syncError() {
    console.log('data-sync-state : ', 'error');
  }

	toggleAll(completed) {
		this.todos = this.todos.map(
			todo => ({ ...todo, completed })
		);
		this.publish();
	}

	toggle(todoToToggle) {
    todoToToggle.completed = !todoToToggle.completed;
    this.db.put(todoToToggle);
	}

	destroy(todo) {
    this.db.remove(todo);
	}

	save(todoToSave, title) {
    this.db.put(todoToSave);
	}

	clearCompleted() {
    this.completed_todos = this.todos.filter( todo => {
      todo.completed ? todo._deleted = true : false;
      return todo.completed;
    });
    this.db.bulkDocs(this.completed_todos);
	}
}
