// @flow
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import { Message, Icon, Form, Button, Grid, Popup, Header, Dropdown } from 'semantic-ui-react';

class SelectBox extends Component {
    clickAddAll: Object;
    clickAddOne: Object;
    state : Object;
    values : Array<Object>;
	
    constructor(props) {
        super(props);
        this.clickAddOne = this.clickAddOne.bind(this);
        this.clickAddAll = this.clickAddAll.bind(this);
        this.state = {fields : []};
        this.values = [{text : 'text1',value : 'value1'},{text : 'text2',value : 'value2'}];
    }
    
    clickAddOne(e: Object) {
        this.state.fields.push(
            <Dropdown placeholder='Elegir nombre del campo' selection options={this.values}/>
        ); 
        this.forceUpdate(); //Como el push devuelve el length y no el array nuevo, no puedo usar setState
    }
    clickAddAll(e: Object) {
        alert('All!');
    }
	
	render() : Object {
        console.log('render');
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
                            this.state.fields.map((el)=>{
                                return(
                                    <Grid.Row verticalAlign="top">
                                        <Grid.Column textAlign="left">
                                            {el}
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
                                                <Button primary onClick={this.clickAddOne}>Uno</Button>
                                                <Button.Or/>
                                                <Button onClick={this.clickAddAll} >Todos</Button>
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
    return state;
}

export default connect(mapStateToProps)(SelectBox);