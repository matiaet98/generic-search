// @flow
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { Grid } from 'semantic-ui-react';
import SelectBox from '../components/SelectBox';

class Search extends Component {
	constructor(props) {
		super(props);
	}
	
	render() : Object {
        return (
            <div>
				<br/>
            	<Grid centered columns={2}>
    				<Grid.Column>
      					<SelectBox/>
						<Link to="/results">Testing</Link>
            	    </Grid.Column>
                </Grid>
			</div>
		);
	}
}

const mapStateToProps : Object = (state : Object) => {
    return state;
}

export default connect(mapStateToProps)(Search);