// @flow
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import { Message, Icon, Form, Button, Grid, Popup, Header, Dropdown } from 'semantic-ui-react';
import {} from '../actions';

class OperationBox extends Component {
	
    constructor(props) {
        super(props);
    }
    
    render(): Object {
    	return (
            <div>
                <Message
                    floating
                    attached
                    icon='book'
                    header='Operacion'
                    content='Seleccione una operacion a realizar sobre los datos'
                >
                </Message>
                <Form children className="attached segment fluid">
                    <Grid divided='vertically'>
                        <Grid.Row verticalAlign='bottom'>
                            <Grid.Column textAlign='right'>
                                <Button circular color='orange' icon='plus' onClick={(e) => { e.preventDefault(); } }/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form>
			</div>
		);
	}
}

const mapStateToProps : Object = (state : Object) => {
    return state;
}

export default connect(mapStateToProps,{})(OperationBox);