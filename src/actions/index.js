// @flow
import { getSelectFields } from '../api';
export const ADD_ONE_SELECT = 'ADD_ONE_SELECT';
export const ADD_ALL_SELECT = 'ADD_ALL_SELECT';
export const SET_SELECTED = 'SET_SELECTED';
export const REMOVE_SELECT = 'REMOVE_SELECT';
export const ADD_FILTER = 'ADD_FILTER';

export const addOneSelect = (noValue : void) => (dispatch: Function) => {
    let values = getSelectFields('mock'); //En la realidad habria que manejarlo con async await
    dispatch({
        type: ADD_ONE_SELECT,
        values : values,
        selectedValue : values[0].value
    });
}

export const addAllSelect = (noValue : void) => (dispatch: Function) => {
    let values = getSelectFields('mock'); //En la realidad habria que manejarlo con async await
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
    dispatch({
        type: ADD_FILTER  
    })
}

