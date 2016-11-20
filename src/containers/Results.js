// @flow
import React from 'react';
import { Component } from 'react';
import { Grid, Message,Checkbox,Dimmer,Segment } from 'semantic-ui-react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { goBack } from 'react-router-redux';
import { query,changeSource } from '../actions';

class Results extends Component {
	constructor(props) {
        super(props);
    }

	linkFormatter(cell, row) {
  		return `<a href="${cell}" target="_blank"><i class="external icon"/></a>`;
    }

    render(): Object {
        let table;
		if (this.props.statement.results && this.props.statement.results.length == 0) {
			table = <Message error floating style={{textAlign:"center"}}>No hay datos para mostrar</Message>; 
		}
		else {
			table =
                <BootstrapTable
                headerContainerClass='ui celled input table'
				tableBodyClass='ui striped celled table'
                data={this.props.statement.results}
                options={{
                    noDataText: 'No hay datos para mostrar',
					prePage: 'Ant',
      				nextPage: 'Prox',
      				firstPage: 'Primero',
                    lastPage: 'Ultimo',
                }}
                >
                <TableHeaderColumn key={0} isKey hidden dataField='_id' dataSort>ID</TableHeaderColumn>
                {
                    this.props.selectLists.map((el, ind) => {
                        if (el.selectedType == 'LINK') {
                            return (
                                <TableHeaderColumn
                                    key={ind}
                                    headerAlign='center'
									dataAlign='center'
                                    dataField={el.selectedValue}
                                    dataFormat={this.linkFormatter}>
                                    {el.selectedText}
                                </TableHeaderColumn>);
                        }
                        else {
                            return (
                                <TableHeaderColumn
                                    key={ind}
									headerAlign='center'
                                    dataSort
                                    dataField={el.selectedValue}
                                    dataSort
                                    filter={{ type: 'TextFilter', delay: 100,placeholder:'filtrar...' }}>
                                    {el.selectedText}
                                </TableHeaderColumn>);
                        }
                    })
				}
  				</BootstrapTable >;
		}
		return (
            <div >    
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column>
                            <Checkbox
                                defaultChecked={false}
                                toggle
                                label="Presione aqui para ver los datos actualizados (puede tardar)"
                                onChange={async (e, {name, value, checked}) => {
                                    if (checked) {
                                        await this.props.changeSource('VIEW');
                                    }
                                    else {
                                        await this.props.changeSource('MVIEW');
                                    }
                                    await this.props.query(this.props.statement.baseStatement, this.props.statement.view);
                                }}
                                />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>	    
                        <Grid.Column>
							{table}	
						</Grid.Column>
					</Grid.Row>	
                </Grid>        
				<Link to={goBack}>Go back!</Link>
			</div>
		);
	}
}

const mapStateToProps : Object = (state : Object) => {
    return ({
        selectLists: state.allReducers.selectLists,
        statement : state.allReducers.statement
    });
}

export default connect(mapStateToProps, {query,changeSource})(Results);