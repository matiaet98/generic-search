// @flow
import { combineReducers } from 'redux';
import { ADD_ONE_SELECT, ADD_ALL_SELECT, SET_SELECTED, REMOVE_SELECT } from '../actions';

const lists = (state: Array<Object> = [], action: Object) => {
    switch (action.type) {
        case ADD_ONE_SELECT:
            return [
                ...state,
                {values: action.values,selectedValue: action.selectedValue}
            ]            
        case ADD_ALL_SELECT:
            return action.values.map((val,ind)=>{
                return {values : action.values,selectedValue : val.value}
            });
        case SET_SELECTED:
            return [
                ...state.slice(0,action.index),
                { values : [...state[action.index].values], selectedValue : action.selectedValue.value  },
                ...state.slice(action.index + 1)
            ]
        case REMOVE_SELECT:
            return [
                ...state.slice(0,action.index),
                ...state.slice(action.index + 1)
            ]
        default:
            return state;
    }
}

const allReducers = combineReducers({
    lists
});

export default allReducers;