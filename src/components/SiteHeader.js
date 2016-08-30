import React, { Component } from 'react';

import '../styles/site-header.css';

class SiteHeader extends Component {
  render() {
    return (
    	<div className="page-header test">
    		<h1>{this.props.title}</h1>
	    </div>
    );
  }
}

export default SiteHeader