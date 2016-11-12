// @flow
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {
    Input,
    Message,
    Icon,
    Form,
    Button,
    Grid,
    Popup,
    Header,
    Dropdown
} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import {
    addFilter,
    setFiltered,
    removeFilter,
    setOpFiltered,
    addFilterField,
    setFilterValue,
    addFilterValue
} from '../actions';
import moment from 'moment';

class WhereBox extends Component {
    val: '';
	
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
                                let opList = [];
                                let optionNode = null;
                                let filterNode = null;
                                switch(list.filterType){
                                    case 'INPUT':
                                        opList = [
                                            { text: '=', value: '=' },
                                            { text: '<>', value: '<>' },
                                            { text: '>', value: '>' },
                                            { text: '>=', value: '>=' },
                                            { text: '<', value: '<' },
                                            { text: '<=', value: '<=' },
                                        ];
                                        list.filterValue = list.filterValue || '';
                                        filterNode = <Input
                                            placeholder='Ingrese un valor'
                                            value={list.filterValue}
                                            fluid
                                            key={'dd' + ind}
                                            onChange={e => { this.props.setFilterValue(ind,e.target.value); } }
                                            />;
                                        optionNode = <Dropdown
                                            value={list.selectedOpValue}
                                            key={'dd' + ind}
                                            selection
                                            options={opList}
                                            onChange={(name, value) => { this.props.setOpFiltered(ind, value.value); } }
                                            />;
                                        break;
                                    case 'MULTIPLEINPUT':
                                        opList = [
                                            { text: 'entre', value: 'IN' },
                                            { text: 'exceptuando', value: 'NOT IN' }
                                        ];
                                        list.filterValue = list.filterValue || [];
                                        filterNode = <Dropdown
                                            value={list.filterValue}
                                            key={'dd' + ind}
                                            selection
                                            fluid
                                            multiple
                                            search
                                            allowAdditions
                                            options={list.filterList}
                                            onAddItem={(name, value) => {
                                                this.props.addFilterValue(ind, value.value);
                                            } }
                                            onChange={(name, value) => { this.props.setFilterValue(ind, value.value); } }
                                            noResultsMessage="No ingreso valores"
                                            placeholder="Valor + <Enter>"
                                            />;
                                        optionNode = <Dropdown
                                            value={list.selectedOpValue}
                                            key={'dd' + ind}
                                            selection
                                            options={opList}
                                            onChange={(name, value) => { this.props.setOpFiltered(ind, value.value); } }
                                            />;
                                        break;
                                    case 'DATE':
                                        opList = [
                                            { text: '=', value: '=' },
                                            { text: '<>', value: '<>' },
                                            { text: '>', value: '>' },
                                            { text: '>=', value: '>=' },
                                            { text: '<', value: '<' },
                                            { text: '<=', value: '<=' },
                                        ];
                                        list.filterValue = list.filterValue || moment();
                                        filterNode = <DatePicker 
                                            selected={list.filterValue}
                                            dateFormat="DD/MM/YYYY"
                                            key = {'dd'+ind}
                                            locale="es"
                                            fluid
                                            placeholderText="seleccione la fecha"
                                            onChange={e => { this.props.setFilterValue(ind,e); } }
                                            />;
                                        optionNode = <Dropdown
                                            value={list.selectedOpValue}
                                            key={'dd' + ind}
                                            selection
                                            options={opList}
                                            onChange={(name, value) => { this.props.setOpFiltered(ind, value.value); } }
                                            />;
                                        break;
                                    case 'DROPDOWN':
                                        opList = [
                                            { text: '=', value: '=' },
                                            { text: '<>', value: '<>' },
                                            { text: '>', value: '>' },
                                            { text: '>=', value: '>=' },
                                            { text: '<', value: '<' },
                                            { text: '<=', value: '<=' },
                                        ];
                                        filterNode = <Dropdown
                                            value={list.filterValue}
                                            key={'dd' + ind}
                                            selection
                                            fluid
                                            options={list.filterList}
                                            onChange={(name, value) => { this.props.setFilterValue(ind, value.value); } }
                                            />;
                                        optionNode = <Dropdown
                                            value={list.selectedOpValue}
                                            key={'dd' + ind}
                                            selection
                                            options={opList}
                                            onChange={(name, value) => { this.props.setOpFiltered(ind, value.value); } }
                                            />;
                                        break;
                                    case 'MULTIPLEDROPDOWN':
                                        opList = [
                                            { text: 'entre', value: 'IN' },
                                            { text: 'exceptuando', value: 'NOT IN' }
                                        ];
                                        list.filterValue = list.filterValue || [];
                                        filterNode = <Dropdown
                                            value={list.filterValue}
                                            key={'dd' + ind}
                                            selection
                                            multiple
                                            fluid
                                            options={list.filterList}
                                            onChange={(name, value) => { this.props.setFilterValue(ind, value.value); } }
                                            />;
                                        optionNode = <Dropdown
                                            value={list.selectedOpValue}
                                            key={'dd' + ind}
                                            selection
                                            options={opList}
                                            onChange={(name, value) => { this.props.setOpFiltered(ind, value.value); } }
                                            />;
                                        break;
                                    default: null;
                                }
                                return( 
                                    <Grid.Row key={'gr'+ind} verticalAlign="top" columns={4}>
                                        <Grid.Column key={'gc1'+ind}>
                                            <Dropdown 
                                                value={list.selectedValue} 
                                                key={'dd'+ind} 
                                                selection
                                                fluid
                                                options={list.values}
                                                onChange={(name, value) => {
                                                    this.props.setFiltered(ind, value);
                                                    let index = list.values.findIndex((el, ind) => {
                                                        return el.value == value.value;
                                                    });
                                                    let filterType = list.columnFilterTypes[index].columnFilterType;
                                                    this.props.addFilterField(ind, value.value, filterType);
                                                }
                                                }
                                                />
                                        </Grid.Column>
                                        <Grid.Column textAlign="center" key={'gc2' + ind}>
                                            {optionNode}    
                                        </Grid.Column>
                                        <Grid.Column key={'gc3' + ind}>
                                            {filterNode}
                                        </Grid.Column>
                                        <Grid.Column key={'gc4'+ind} textAlign='right'>
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

export default connect(mapStateToProps, {
    addFilter,
    setFiltered,
    removeFilter,
    setOpFiltered,
    addFilterField,
    setFilterValue,
    addFilterValue
})(WhereBox);