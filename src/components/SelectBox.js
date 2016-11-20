// @flow
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import { Message, Icon, Form, Button, Grid, Popup, Header, Dropdown } from 'semantic-ui-react';
import {addOneSelect,addAllSelect,setSelected,removeSelect} from '../actions';

class SelectBox extends Component {
	
    constructor(props) {
        super(props);
    }
    
    render(): Object {
    	return (
            <div>
                <Message
                    floating
                    attached
                    icon='browser'
                    header='Visualización'
                    content='Seleccione los campos que desea visualizar en la consulta'
                >
                </Message>
                <Form children className="attached segment fluid">
                    <Grid divided='vertically'>
                        {
                            this.props.selectLists &&
                            this.props.selectLists.map((list, ind) => {
                                let options = list.values.map((el) => {
                                    return { value: el.value, text: el.text };                                    
                                });
                                return( 
                                    <Grid.Row key={'gr'+ind} verticalAlign="top" columns={2}>
                                        <Grid.Column key={'gc1'+ind} textAlign="left">
                                            <Dropdown 
                                                value={list.selectedValue || list.values[0].value} 
                                                key={'dd' + ind}
                                                fluid
                                                selection 
                                                options={options}
                                                onChange={(name, value) => {
                                                    let obj = list.values.find((el) => {
                                                        return el.value == value.value;
                                                    });
                                                    this.props.setSelected(ind, obj.value, obj.text,obj.columnType);
                                                } }
                                                />
                                        </Grid.Column>
                                        <Grid.Column key={'gc2'+ind} textAlign='right'>
                                            <Button key={'btn' + ind} circular basic color='red' icon='remove' onClick={(e) => { e.preventDefault(); this.props.removeSelect(ind) } } />
                                        </Grid.Column>
                                    </Grid.Row>
                                );
                            })
                        }
                        <Grid.Row verticalAlign='bottom'>
                            <Grid.Column textAlign='right'>
                                <Popup
                                    trigger={<Button circular color='blue' icon='plus' onClick={(e) => { e.preventDefault(); this.props.addOneSelect() } }/>}
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
                                                <Button onClick={() => { this.props.addAllSelect() } }>
                                                    Todos
                                                </Button>
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
    return ({ selectLists: state.allReducers.selectLists });
}

export default connect(mapStateToProps,{addOneSelect,addAllSelect,setSelected,removeSelect})(SelectBox);