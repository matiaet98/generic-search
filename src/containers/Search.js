// @flow
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Search extends Component {
	constructor(props) {
		super(props);
	}
	
	render() : Object {
    	return (
            <div>
				<Link to="/results">Testing</Link>    
			</div>
		);
	}
}

const mapStateToProps : Object = (state : Object) => {
    return state;
}

export default connect(mapStateToProps)(Search);