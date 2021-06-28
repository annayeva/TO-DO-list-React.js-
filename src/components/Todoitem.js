import React from 'react';
import Todoicons from './Todoicons.js';

export default class extends React.Component{
	render(){
		return(
			<>
				<li className="list-group-item d-flex justify-content-between" id={this.props.id}>{this.props.text}
					<div>
						{!this.props.editing? 
							<Todoicons 
								handleEdit={this.props.handleEdit} 
								handleDelete={this.props.handleDelete} /> 
							: null }
					</div>
				</li>
			</>
		);
	}
}
