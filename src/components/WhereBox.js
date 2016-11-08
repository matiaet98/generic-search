// @flow
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import { Message, Icon, Form, Button, Grid, Popup, Header, Dropdown } from 'semantic-ui-react';
import {addFilter,setFiltered,removeFilter} from '../actions';

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
                        {
                            this.props.filterLists &&
                            this.props.filterLists.map((list, ind) => {
                                const opList = [
                                { text: '=', value: '=' },
                                { text: '<>', value: '<>' },
                                { text: '>', value: '>' },
                                { text: '>=', value: '>=' },
                                { text: '<', value: '<' },
                                { text: '<=', value: '<=' },
                                { text: 'entre', value: 'IN' },
                                { text: 'fuera de', value: 'NOT IN' }
                                ];
                                return( 
                                    <Grid.Row key={'gr'+ind} verticalAlign="top" columns={3}>
                                        <Grid.Column key={'gc1'+ind}>
                                            <Dropdown 
                                                value={list.selectedValue} 
                                                key={'dd'+ind} 
                                                selection 
                                                options={list.values}
                                                onChange={ (name,value) => { this.props.setFiltered(ind,value); } }
                                                />
                                        </Grid.Column>
                                        <Grid.Column key={'gc3' + ind}>
                                            <Dropdown  
                                                key={'dd'+ind} 
                                                selection 
                                                options={opList}
                                            />    
                                        </Grid.Column>
                                        <Grid.Column key={'gc2'+ind} textAlign='right'>
                                            <Button key={'btn' + ind} circular basic color='red' icon='remove' onClick={(e) => { e.preventDefault(); this.props.removeFilter(ind) } } />
                                        </Grid.Column>
                                    </Grid.Row>
                                );
                            })
                        }
                        <Grid.Row verticalAlign='bottom'>
                            <Grid.Column textAlign='right'>
                                <Button circular color='blue' icon='plus' onClick={(e) => { e.preventDefault(); this.props.addFilter() } }/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form>
			</div>
		);
	}
}

const mapStateToProps : Object = (state : Object) => {
    return ({ filterLists: state.allReducers.filterLists });
}

export default connect(mapStateToProps,{addFilter,setFiltered,removeFilter})(WhereBox);