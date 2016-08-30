import React, { Component } from 'react';
import MenuEntry from './MenuEntry';
import SiteHeader from './SiteHeader';

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
	      <SiteHeader title={'Online Auditor'} />
	      <div>
	      	<MenuEntry menuData={inventory} />
	      	<MenuEntry menuData={user} />
	      </div>
	    </div>
    );
  }
}

export default Auditor