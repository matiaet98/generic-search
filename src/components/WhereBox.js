// @flow
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import { Message, Icon, Form, Button, Grid, Popup, Header, Dropdown } from 'semantic-ui-react';
import {addFilter} from '../actions';

class WhereBox extends Component {
	
    constructor(props) {
        super(props);
    }
    
    render(): Object {
    	return (
            <div>
                <Message
                    floating
                    attached
                    icon='filter'
                    header='Filtros'
                    content='Seleccione los filtros que desea aplicar'
                >
                </Message>
                <Form children className="attached segment fluid">
                    <Grid divided='vertically'>
                        <Grid.Row verticalAlign='bottom'>
                            <Grid.Column textAlign='right'>
                                <Button circular color='red' icon='plus' onClick={(e) => { e.preventDefault(); this.props.addFilter() } }/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form>
			</div>
		);
	}
}

const mapStateToProps : Object = (state : Object) => {
    return ({ lists: state.allReducers.lists });
}

export default connect(mapStateToProps,{addFilter})(WhereBox);