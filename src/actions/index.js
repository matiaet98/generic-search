// @flow
export const ADD_ONE_SELECT = 'ADD_ONE_SELECT';
export const ADD_ALL_SELECT = 'ADD_ALL_SELECT';
export const SET_SELECTED = 'SET_SELECTED';
export const REMOVE_SELECT = 'REMOVE_SELECT';

const fetchSelectFields = (noValue : void) : Array<Object> => {
    return [
        { text: 'text1', value: 'value1' }, 
        { text: 'text2', value: 'value2' },
        { text: 'text3', value: 'value3' },
        { text: 'text4', value: 'value4' },
        { text: 'text5', value: 'value5' }
    ];
}

export const addOneSelect = (noValue : void) => (dispatch: Function) => {
    let values = fetchSelectFields();
    dispatch({
        type: ADD_ONE_SELECT,
        values : values,
        selectedValue : values[0].value
    });
}

export const addAllSelect = (noValue : void) => (dispatch: Function) => {
    let values = fetchSelectFields();
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

