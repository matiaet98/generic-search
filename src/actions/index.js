// @flow
import { getSelectFields, getOperationFields, getFilterFields, getDropdownValues } from '../api';
export const ADD_ONE_SELECT = 'ADD_ONE_SELECT';
export const ADD_ALL_SELECT = 'ADD_ALL_SELECT';
export const SET_SELECTED = 'SET_SELECTED';
export const REMOVE_SELECT = 'REMOVE_SELECT';
export const ADD_FILTER = 'ADD_FILTER';
export const SET_FILTERED = 'SET_FILTERED';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const ADD_OPERATION = 'ADD_OPERATION';
export const SET_OPERATED = 'SET_OPERATED';
export const REMOVE_OPERATION = 'REMOVE_OPERATION';
export const SET_OP_FILTERED = 'SET_OP_FILTERED';
export const ADD_FILTER_FIELD = 'SET_FILTER_FIELD';
export const SET_FILTER_VALUE = 'SET_FILTER_VALUE';
const VIEW_NAME = 'mocked!';

export const addOneSelect = (noValue : void) => (dispatch: Function) => {
    let values = getSelectFields(VIEW_NAME); //En la realidad habria que manejarlo con async await
    dispatch({
        type: ADD_ONE_SELECT,
        values : values,
        selectedValue : values[0].value
    });
}

export const addAllSelect = (noValue : void) => (dispatch: Function) => {
    let values = getSelectFields(VIEW_NAME); //En la realidad habria que manejarlo con async await
    dispatch({
        type: ADD_ALL_SELECT,
        values : values,
        selectedValue : values[0].value
    });
}

export const setSelected = (index: number, value: string) => (dispatch: Function) => {
    dispatch({
        type: SET_SELECTED,
        index: index,
        selectedValue : value
    });
}

export const removeSelect = (index: number) => (dispatch: Function) => {
    dispatch({
        type: REMOVE_SELECT,
        index: index
    });
}

export const addFilter = (noValue: void) => (dispatch: Function) => {
    let values = getFilterFields(VIEW_NAME); //En la realidad habria que manejarlo con async await
    let valueList = values.map((el, ind) => {
        return { value : el.value, text: el.text };        
    })
    let typeList = values.map((el, ind) => {
        return {columnFilterType : el.columnFilterType}
    })
    dispatch({
        type: ADD_FILTER,
        values: valueList,
        columnFilterTypes : typeList, 
        selectedValue: '',
        selectedOpValue: '',
        filterType: '',
        filterList: [],
        filterValue : '',
        selectedFilterList: ''
    });
}

export const setFiltered = (index: number, value: string) => (dispatch: Function) => {
    dispatch({
        type: SET_FILTERED,
        index: index,
        selectedValue : value
    });
}

export const setFilterValue = (index: number, value: string) => (dispatch: Function) => {
    dispatch({
        type: SET_FILTER_VALUE,
        index: index,
        filterValue : value
    });
}

export const addFilterField = (index: number, value: string, filterType: string) => (dispatch: Function) => {
    let filterList = [];
    if (filterType == 'DROPDOWN' || filterType == 'MULTIPLEDROPDOWN') {
        filterList = getDropdownValues(VIEW_NAME, value);
    }
    dispatch({
        type: ADD_FILTER_FIELD,
        index : index,
        filterType: filterType,
        filterList: filterList
    });
}

export const setOpFiltered = (index: number, value: string) => (dispatch: Function) => {
    dispatch({
        type: SET_OP_FILTERED,
        index: index,
        selectedOpValue : value
    });
}

export const removeFilter = (index: number) => (dispatch: Function) => {
    dispatch({
        type: REMOVE_FILTER,
        index: index
    });
}

export const addOperation = (noValue: void) => (dispatch: Function) => {
    let values = getOperationFields(VIEW_NAME); //En la realidad habria que manejarlo con async await
    dispatch({
        type: ADD_OPERATION,
        values : values,
        selectedValue : values[0].value
    })
}

export const setOperated = (index: number, value: string) => (dispatch: Function) => {
    dispatch({
        type: SET_OPERATED,
        index: index,
        selectedValue : value
    });
}

export const removeOperation = (index: number) => (dispatch: Function) => {
    dispatch({
        type: REMOVE_OPERATION,
        index: index
    });
}

