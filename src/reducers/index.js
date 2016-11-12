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
    REMOVE_OPERATION,
    SET_OP_FILTERED,
    ADD_FILTER_FIELD,
    SET_FILTER_VALUE,
    ADD_FILTER_VALUE,
    SET_OPERATION
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
                {
                    values: action.values,
                    selectedValue: action.selectedValue,
                    selectedOpValue: action.selectedOpValue,
                    columnFilterTypes: action.columnFilterTypes,
                    filterType: action.filterType,
                    filterList: action.filterList,
                    filterValue : action.filterValue,
                    selectedFilterList : action.selectedFilterList
                }
            ]
        case SET_FILTERED:
            return state
                .map( (el,ind) => {
                    return ind != action.index ? el : {
                        values: el.values,
                        selectedValue: action.selectedValue.value,
                        selectedOpValue: '',
                        columnFilterTypes: el.columnFilterTypes,
                        filterType: el.filterType,
                        filterList: el.filterList,
                        filterValue : el.filterValue,
                        selectedFilterList : el.selectedFilterList
                    };
                });
        case SET_FILTER_VALUE:
            return state
                .map( (el,ind) => {
                    return ind != action.index ? el : {
                        values: el.values,
                        selectedValue: el.selectedValue,
                        selectedOpValue: el.selectedOpValue,
                        columnFilterTypes: el.columnFilterTypes,
                        filterType: el.filterType,
                        filterList: el.filterList,
                        filterValue : action.filterValue,
                        selectedFilterList : el.selectedFilterList
                    };
                });
        case ADD_FILTER_VALUE:
            return state
                .map((el, ind) => {
                    return ind != action.index ? el : {
                        values: el.values,
                        selectedValue: el.selectedValue,
                        selectedOpValue: el.selectedOpValue,
                        columnFilterTypes: el.columnFilterTypes,
                        filterType: el.filterType,
                        filterList: [...el.filterList, { text: action.filterValue,value : action.filterValue }],
                        filterValue : el.filterValue,
                        selectedFilterList : el.selectedFilterList
                    };
                });
        case REMOVE_FILTER:
            return state.filter(
                (el,ind) =>{ 
                    return ind != action.index
                });
        case SET_OP_FILTERED:
            return state
                .map( (el,ind) => {
                    return ind != action.index ? el : {
                        values: el.values,
                        selectedValue: el.selectedValue,
                        selectedOpValue: action.selectedOpValue,
                        columnFilterTypes: el.columnFilterTypes,
                        filterType: el.filterType,
                        filterList: el.filterList,
                        filterValue : el.filterValue,
                        selectedFilterList : el.selectedFilterList
                    };
                });
        case ADD_FILTER_FIELD:
            return state
                .map((el, ind) => {
                    return ind != action.index ? el : {
                        values: el.values,
                        selectedValue: el.selectedValue,
                        selectedOpValue: el.selectedOpValue,
                        columnFilterTypes: el.columnFilterTypes,
                        filterType: action.filterType,
                        filterList: action.filterList,
                        filterValue : '',
                        selectedFilterList : el.selectedFilterList
                    };
                });
        default:
            return state;
    }
}

const operationLists = (state: Array<Object> = [], action: Object) => {
    switch (action.type) {
        case ADD_OPERATION:
            return [
                {
                    values: action.values,
                    selectedValue: action.selectedValue,
                    selectedOperation : ''
                }
            ]
        case SET_OPERATED:
            return state
                .map( (el,ind) => {
                    return ind != action.index ? el : {
                        values: el.values,
                        selectedValue: action.selectedValue.value,
                        selectedOperation : el.selectedOperation
                    };
                });
        case SET_OPERATION:
            return state
                .map( (el,ind) => {
                    return ind != action.index ? el : {
                        values: el.values,
                        selectedValue: el.selectedValue,
                        selectedOperation : action.selectedOperation.value
                    };
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