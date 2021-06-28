import React from 'react';

export default class Todoicons extends React.Component{
	render() {
		return (
					<div>
						<span><i className="fas fa-edit" onClick={this.props.handleEdit}></i></span>
						<span><i className="fas fa-trash-alt" onClick={this.props.handleDelete}></i></span>
					</div>
			);
	}
}