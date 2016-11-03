// @flow
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'semantic-ui-react';
import {} from '../actions';

class SendButton extends Component {
	
    constructor(props) {
        super(props);
    }
    
    render(): Object {
    	return (
            <div>
                <Button key='btnSend' icon='search' color='blue' content='Realizar Consulta' onClick={(e) => { e.preventDefault(); } } />
                <Button key='btnExport' icon='file excel outline' color='green' content='Exportar a CSV' onClick={(e) => { e.preventDefault(); } } />
			</div>
		);
	}
}

const mapStateToProps : Object = (state : Object) => {
    return state;
}

export default connect(mapStateToProps,{})(SendButton);