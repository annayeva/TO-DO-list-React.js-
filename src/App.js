import React from 'react';
import './App.css';
import Todoinput from './components/Todoinput.js';
import Todolist from './components/Todolist.js';

export default class App extends React.Component {
	constructor(){
		super();
		this.state = {
			todos:[
				{id:0, text:'cook dinner'},
				{id:1, text:'do laundry'},
				{id:2, text:'go for a walk'}
			],
			item:'',
			id:'',
			editing:false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearList = this.clearList.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleChange = e => {
		this.setState({
			item:e.target.value
		});	
	}

	handleSubmit = e => {
		e.preventDefault();
		let randomNumber = Math.random();
		let itemId = (this.state.editing ? this.state.id : randomNumber);
		let newItem = {id:itemId , text:this.state.item};
		let updatedItems = [...this.state.todos,newItem];
		this.setState ({
			todos:updatedItems,
			item:'',
			editing:false
		});
	}

	clearList = e => {
		this.setState({
			todos:[]
		});
	}

	handleDelete = (id) => {
		const filteredItems = this.state.todos.filter( todo => todo.id !== id);
		this.setState({
			todos:filteredItems
		});
	}

	handleEdit = (id) => {
		const selectedItem = this.state.todos.find(todo => todo.id === id);
		this.handleDelete(id);
		this.setState({
			editing:true,
			id:id,
			item:selectedItem.text
		});
	}


	render(){
	  return (
	    <div  className="border col-md-5 col-sm-8 col-xs-10" id="content-wrapper">
	      <Todoinput editing={this.state.editing} item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
	      <Todolist editing={this.state.editing} handleEdit={this.handleEdit} handleDelete={this.handleDelete} handleClick={this.clearList} todos={this.state.todos}/>
	    </div>
	  )
	}
}

