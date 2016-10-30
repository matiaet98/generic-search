// @flow
import { combineReducers } from 'redux';
import { ADD_ONE_SELECT, SET_SELECTED } from '../actions';

const addOneSelect = (state: Object = {}, action: any) => {
    switch (action.type) {
        case ADD_ONE_SELECT:
            if (!state.lists) {
                return {
                    ...state,
                    lists:[{values: action.values,selectedValue: action.selectedValue}]
                }
            }
            else {
                return {
                    ...state,
                    lists:[
                        ...state.lists,
                        { values: action.values, selectedValue: action.selectedValue }
                    ]
                }
            }
        default:
            return state;
    }
}

const setSelected = (state: Object = {}, action: any) => {
    switch (action.type) {
        case SET_SELECTED:
            return {...state,index: action.index, selectedValue: action.selectedValue};    



            // let newLists = [...state.lists];
            // newLists[action.index].selectedValue = action.selectedValue;
            // return {
            //     ...state,
            //     lists: newLists
            // }
        default:
            return state;
    }
}

const allReducers = combineReducers({
    addOneSelect,
    setSelected
});

export default allReducers;