// @flow
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import { Message, Icon, Form, Button, Grid, Popup, Header, Dropdown } from 'semantic-ui-react';
import {addOperation,setOperated,removeOperation} from '../actions';

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
                        {
                            this.props.operationLists &&
                            this.props.operationLists.map((list, ind) => {
                                return( 
                                    <Grid.Row key={'gr'+ind} verticalAlign="top" columns={2}>
                                        <Grid.Column key={'gc1'+ind} textAlign="left">
                                            <Dropdown 
                                                value={list.selectedValue || list.values[0].value} 
                                                key={'dd'+ind} 
                                                selection 
                                                options={list.values}
                                                onChange={ (name,value) => { this.props.setOperated(ind,value); } }
                                                />
                                        </Grid.Column>
                                        <Grid.Column key={'gc2'+ind} textAlign='right'>
                                            <Button key={'btn' + ind} circular basic color='red' icon='remove' onClick={(e) => { e.preventDefault(); this.props.removeOperation(ind) } } />
                                        </Grid.Column>
                                    </Grid.Row>
                                );
                            })
                        }
                        <Grid.Row verticalAlign='bottom'>
                            <Grid.Column textAlign='right'>
                                <Button circular color='blue' icon='plus' onClick={(e) => { e.preventDefault(); this.props.addOperation() } }/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form>
			</div>
		);
	}
}

const mapStateToProps : Object = (state : Object) => {
    return ({ operationLists: state.allReducers.operationLists });
}

export default connect(mapStateToProps,{addOperation,setOperated,removeOperation})(OperationBox);