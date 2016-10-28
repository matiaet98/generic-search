// @flow
import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { goBack } from 'react-router-redux';

class Results extends Component {
	constructor(props) {
		super(props);
	}
	
	render() : Object {
    	return (
            <div>
				<p>Ok</p>
				<Link to={goBack}>Go back!</Link>
			</div>
		);
	}
}

const mapStateToProps : Object = (state : Object) => {
    return state;
}

export default connect(mapStateToProps)(Results);