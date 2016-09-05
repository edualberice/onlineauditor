import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';

import '../styles/auditory-item.css'

class AuditoryItem extends Component {
  render() {
  	return(
	  	<div className="panel panel-default auditory-item">
	  		<div class="panel-body">
		  		<div className="auditory-name">{this.props.values.name}</div>
		  		<div className="auditory-info">
		  			<div className="auditory-data">
		  				<strong>Start date:</strong> {this.props.values.startDate}</div>
		  			<div className="auditory-data">
		  				<strong>End date:</strong> {this.props.values.endDate}</div>
		  		</div>
		  		<Button	
		  			bsStyle="primary"
		  			className="auditory-button"
		  			href={`/finish-auditory/${this.props.values.key}`}
		  		>
		  			Finish
		  		</Button>
		  	</div>
	  	</div>
  	)
  }
}

export default AuditoryItem