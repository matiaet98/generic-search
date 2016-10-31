// @flow
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import { Message, Icon, Form, Button, Grid, Popup, Header, Dropdown } from 'semantic-ui-react';
import {addOneSelect,setSelected} from '../actions';

class SelectBox extends Component {
	
    constructor(props) {
        super(props);
    }
    
	render() : Object {
    	return (
            <div>
                <Message
                    attached
                    icon='browser'
                    header='Visualización'
                    content='Seleccione los campos que desea visualizar en la consulta'
                >
                </Message>
                <Form children className="attached segment fluid">
                    <Grid>
                        {
                            this.props.lists &&
                            this.props.lists.map( (list,ind) => {
                                return( 
                                    <Grid.Row key={ind} verticalAlign="top">
                                        <Grid.Column key={ind} textAlign="left">
                                            <Dropdown 
                                                defaultValue={list.selectedValue || list.values[0].value} 
                                                key={list.values.length} 
                                                selection 
                                                options={list.values}
                                                onChange={ (name,value) => { this.props.setSelected(ind,value); } }
                                            />
                                        </Grid.Column>
                                    </Grid.Row>
                                );
                            })
                        }
                        <Grid.Row verticalAlign='bottom'>
                            <Grid.Column textAlign='right'>
                                <Popup
                                    trigger={<Button circular color='blue' icon='plus' onClick={(e) => e.preventDefault()}/>}
                                    flowing
                                    hoverable
                                    positioning='right center'>
                                    <Grid centered divided>
                                        <Grid.Column>
                                            <Header textAlign='center' as='h4'>Campos a agregar</Header>
                                            <Button.Group>
                                                <Button primary onClick={()=>{this.props.addOneSelect()}}>
                                                    Uno
                                                </Button>
                                                <Button.Or/>
                                                <Button onClick={()=>{this.props.addOneSelect()}}>Todos</Button>
                                            </Button.Group>
                                        </Grid.Column>
                                    </Grid> 
                                </Popup>
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

export default connect(mapStateToProps,{addOneSelect,setSelected})(SelectBox);