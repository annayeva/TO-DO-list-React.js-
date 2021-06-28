import React from 'react';
import Todoitem from './Todoitem.js';

export default class Todolist extends React.Component {
	render(){
		return(
			<>
				<h2>To-do list:</h2>
				<ul className="list-group">
			          {this.props.todos.map(todo => 
			          	<Todoitem 
			          	handleDelete={ ()=> this.props.handleDelete(todo.id)}
			          	handleEdit={ ()=> this.props.handleEdit(todo.id)}
			          	editing={this.props.editing} 
			          	key={todo.id}
			          	id={todo.id} 
			          	text={todo.text} />)}
			    </ul>
			    <button id="btn-clearList" className="btn btn-danger" onClick={this.props.handleClick} >Clear list</button>
			</>
		)
	}
}