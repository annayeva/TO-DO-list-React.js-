import React from 'react'

export default class Todoinput extends React.Component {
render() {
		return (
			<div  id="todo-input-form">
				<form className="input-group mb-3" onSubmit={this.props.handleSubmit}>
					<input 
						className="form-control" 
						placeholder={this.props.editing? "" : "New to-do"} 
						type="text" 
						id="todoInputField" 
						onChange={this.props.handleChange} 
						value={this.props.item}>	
					</input>
					<input 
						className={this.props.editing ? "btn btn-success":"btn btn-secondary"} 
						type="submit"  
						value={this.props.editing ? "Edit" : "Add"}>				
					</input>
				</form>
			</div>
		)
	}
}



