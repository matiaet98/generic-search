// @flow
import { combineReducers } from 'redux';
import {
    ADD_ONE_SELECT,
    ADD_ALL_SELECT,
    SET_SELECTED,
    REMOVE_SELECT,
    ADD_FILTER,
    SET_FILTERED,
    REMOVE_FILTER,
    ADD_OPERATION,
    SET_OPERATED,
    REMOVE_OPERATION
} from '../actions';

const selectLists = (state: Array<Object> = [], action: Object) => {
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
            return state
                .map( (el,ind) => {
                    return ind != action.index ? el : {values : el.values, selectedValue : action.selectedValue.value};
                });
        case REMOVE_SELECT:
            return state.filter(
                (el,ind) =>{ 
                    return ind != action.index
                });
        default:
            return state;
    }
}

const filterLists = (state: Array<Object> = [], action: Object) => {
    switch (action.type) {
        case ADD_FILTER:
            return [
                ...state,
                {values: action.values,selectedValue: action.selectedValue}
            ]
        case SET_FILTERED:
            return state
                .map( (el,ind) => {
                    return ind != action.index ? el : {values : el.values, selectedValue : action.selectedValue.value};
                });
        case REMOVE_FILTER:
            return state.filter(
                (el,ind) =>{ 
                    return ind != action.index
                });
        default:
            return state;
    }
}

const operationLists = (state: Array<Object> = [], action: Object) => {
    switch (action.type) {
        case ADD_OPERATION:
            return [
                {values: action.values,selectedValue: action.selectedValue}
            ]
        case SET_OPERATED:
            return state
                .map( (el,ind) => {
                    return ind != action.index ? el : {values : el.values, selectedValue : action.selectedValue.value};
                });
        case REMOVE_OPERATION:
            return state.filter(
                (el,ind) => { 
                    return ind != action.index
                });
        default:
            return state;
    }
}

const allReducers = combineReducers({
    selectLists,
    filterLists,
    operationLists
});

export default allReducers;