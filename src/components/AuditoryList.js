import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';

import AuditoryItem from './AuditoryItem';

import '../styles/auditory-list.css'

let auditories = [
	{
		key: 1,
		name: 'My Auditory 1',
		startDate: '77/77/7777',
		endDate: '77/77/7777',
	},
	{
		key: 2,
		name: 'My Auditory 2',
		startDate: '88/88/8888',
		endDate: '88/88/8888',
	},
	{
		key: 3,
		name: 'My Auditory 3',
		startDate: '99/99/9999',
		endDate: '99/99/9999',
	},
];

class AuditoryList extends Component {
  render() {
  	return(
  		<div className="list">
  			<Button 
                bsStyle="primary"
            >
            	New Auditory
            </Button>
            {auditories.map((v) => {return(
            	<AuditoryItem values={v} />
            )})}
  		</div>
  	);
  }
}

export default AuditoryList