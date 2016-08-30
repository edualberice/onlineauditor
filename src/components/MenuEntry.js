import React, { Component } from 'react';

import Button from 'react-bootstrap/lib/Button';

import '../styles/menu-entry.css';

class MenuEntry extends Component {
  render() {
    return (
    	<div className="panel panel-default menu-entry">
            <div className="panel-body">
        		<h2>{this.props.menuData.plural}</h2>
        		<div>
        			<Button 
                        bsStyle="primary menu-button"
                        href={`#/new${this.props.menuData.name}`}
                    >
                        New {this.props.menuData.name}
                    </Button>
        			<Button 
                        bsStyle="primary menu-button"
                        href={`#/list${this.props.menuData.plural}`}
                    >
                        List {this.props.menuData.name}
                    </Button>
        		</div>
            </div>
    	</div>
    );
  }
}

export default MenuEntry