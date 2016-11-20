// @flow
import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {Button,Modal} from 'semantic-ui-react';
import {
    showModal,
    closeModal,
    countRecords,
    query
} from '../actions';

class SendButton extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        if (this.props.statement.results && this.props.statement.results.length == 0) {
            this.props.query(this.props.statement.baseStatement,this.props.statement.view);
            browserHistory.push('/results');
        }
    }
    
    render(): Object {
        return (
            <div>
                <Button
                    key='btnSend'
                    icon='search'
                    color='blue'
                    content='Buscar'
                    onClick={(e) => {
                        e.preventDefault();
                        if (this.props.selectLists.length == 0) {
                            this.props.showModal('Error','Debe seleccionar al menos un campo para consultar');
                        }
                        this.props.countRecords(
                            this.props.selectLists,
                            this.props.filterLists,
                            this.props.operationLists
                        );
                    } }
                    />
                <Button
                    key='btnExport'
                    icon='file excel outline'
                    color='green'
                    content='Exportar a CSV'
                    onClick={(e) => {
                        e.preventDefault();
                        if (this.props.selectLists.length == 0) {
                            this.props.showModal('Error','Debe seleccionar al menos un campo para consultar');
                        }
                    } }
                    />
                <Modal
                    open={this.props.modal.isOpen}
                    dimmer='blurring'
                    closeOnEscape={false}
                    closeOnRootNodeClick={false}
                >
                    <Modal.Header>
                        <p>{this.props.modal.title}</p>
                    </Modal.Header>
                    <Modal.Content>
                        <p>{this.props.modal.message}</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='blue' onClick={(e) => { e.preventDefault(); this.props.closeModal() } }>Ok</Button>
                    </Modal.Actions>
                </Modal>
			</div>
		);
	}
}

const mapStateToProps: Object = (state: Object) => {
    return ({
        selectLists: state.allReducers.selectLists,
        filterLists : state.allReducers.filterLists,
        operationLists : state.allReducers.operationLists,
        modal: state.allReducers.modal,
        statement : state.allReducers.statement
    });
}

export default connect(mapStateToProps, {
    showModal,
    closeModal,
    countRecords,
    query
})(SendButton);