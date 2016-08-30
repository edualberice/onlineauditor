import React, { Component } from 'react';
import MenuEntry from './MenuEntry'

let inventory = {
	name: 'Inventory',
	plural: 'Inventories',
};

let user = {
	name: 'User',
	plural: 'Users',
};

class Auditor extends Component {
  render() {
    return (
    	<div>
	      <div className="jumbotron header">
	      	<h1>Online Auditor</h1>
	      </div>
	      <div>
	      	<MenuEntry menuData={inventory} />
	      	<MenuEntry menuData={user} />
	      </div>
	    </div>
    );
  }
}

export default Auditor