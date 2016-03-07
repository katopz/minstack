import { h, render, Component } from 'preact';
import { Router } from 'preact-router';
import { bind } from 'decko';
import TodoModel from './model';
import TodoFooter from './footer';
import TodoItem from './item';

const REMOTE_DB_URL = null; // e.g. http://localhost:5984/dbname

const ENTER_KEY = 13;

const ALL_TODOS = 'all';
const ACTIVE_TODOS = 'active';
const COMPLETED_TODOS = 'completed';

const FILTERS = {
	[ALL_TODOS]: todo => true,
	[ACTIVE_TODOS]: todo => !todo.completed,
	[COMPLETED_TODOS]: todo => todo.completed
};

export default class App extends Component {
	state = { nowShowing: ALL_TODOS };

	constructor() {
		super();
		this.model = new TodoModel(REMOTE_DB_URL);
		this.model.subscribe( () => this.setState({}) );
	}

	@bind
	handleRoute({ url }) {
		let nowShowing = url.replace(/\/$/,'').split('/').pop();
		if (!FILTERS[nowShowing]) {
			nowShowing = ALL_TODOS;
		}
		this.setState({ nowShowing });
	}

	@bind
	handleNewTodoKeyDown(e) {
		if (e.keyCode!==ENTER_KEY) return;
		e.preventDefault();

		let val = this.state.newTodo.trim();
		if (val) {
			this.model.addTodo(val);
			this.setState({ newTodo: '' });
		}
	}

	@bind
	toggleAll(event) {
		let checked = event.target.checked;
		this.model.toggleAll(checked);
	}

	@bind
	toggle(todoToToggle) {
		this.model.toggle(todoToToggle);
	}

	@bind
	destroy(todo) {
		this.model.destroy(todo);
	}

	@bind
	edit(todo) {
		this.setState({ editing: todo.id });
	}

	@bind
	save(todoToSave, text) {
		this.model.save(todoToSave, text);
		this.setState({ editing: null });
	}

	@bind
	cancel() {
		this.setState({ editing: null });
	}

	@bind
	clearCompleted() {
		this.model.clearCompleted();
	}

	render({ }, { nowShowing=ALL_TODOS, newTodo, editing }) {
		let { todos } = this.model,
			shownTodos = todos.filter( FILTERS[nowShowing] ),
			activeTodoCount = todos.reduce( (a, todo) => a + (todo.completed ? 0 : 1), 0),
			completedCount = todos.length - activeTodoCount;

		return (
			<div>
				<Router onChange={this.handleRoute}><Noop path="/" /></Router>

				<header class="header">
					<h1>todos</h1>
					<input
						class="new-todo"
						placeholder="What needs to be done?"
						value={newTodo}
						onKeyDown={this.handleNewTodoKeyDown}
						onInput={this.linkState('newTodo')}
						autoFocus={true}
					/>
				</header>

				{ todos.length ? (
					<section class="main">
						<input
							class="toggle-all"
							type="checkbox"
							onChange={this.toggleAll}
							checked={activeTodoCount === 0}
						/>
						<ul class="todo-list">
							{ shownTodos.map( todo => (
								<TodoItem
									todo={todo}
									onToggle={this.toggle.bind(this, todo)}
									onDestroy={this.destroy.bind(this, todo)}
									onEdit={this.edit.bind(this, todo)}
									editing={editing === todo.id}
									onSave={this.save.bind(this, todo)}
									onCancel={this.cancel}
								/>
							)) }
						</ul>
					</section>
				) : null }

				{ (activeTodoCount || completedCount) ? (
					<TodoFooter
						count={activeTodoCount}
						completedCount={completedCount}
						nowShowing={nowShowing}
						onClearCompleted={this.clearCompleted}
					/>
				) : null }
			</div>
		);
	}
}

// just a fake component we can feed to router. yay.
class Noop extends Component {
	render() {
		return null;
	}
}
