// @flow
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { Grid } from 'semantic-ui-react';
import SelectBox from '../components/SelectBox';
import WhereBox from '../components/WhereBox';
import OperationBox from '../components/OperationBox';
import SendButtons from '../components/SendButtons';

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
						<SelectBox />
					</Grid.Column>
				</Grid>
				<Grid centered columns={2}>
    				<Grid.Column>
						<WhereBox />
					</Grid.Column>
				</Grid>
				<Grid centered columns={2}>
    				<Grid.Column>
						<OperationBox />
					</Grid.Column>
				</Grid>
				<Grid centered>
    				<Grid.Row verticalAlign='bottom'>
						<Grid.Column textAlign='center'>
							<SendButtons />
						</Grid.Column>
					</Grid.Row>	
                </Grid>
				<Link to="/results">Testing</Link>
			</div>
		);
	}
}

const mapStateToProps : Object = (state : Object) => {
    return state;
}

export default connect(mapStateToProps)(Search);