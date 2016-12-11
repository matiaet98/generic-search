// @flow
import {
    getSelectFields,
    getOperationFields,
    getFilterFields,
    getDropdownValues,
    getOperations,
    fetchRecordCount,
    fetchRecords,
    fetchMView,
    fetchView
} from '../api';
export const ADD_ONE_SELECT = 'ADD_ONE_SELECT';
export const ADD_ALL_SELECT = 'ADD_ALL_SELECT';
export const SET_SELECTED = 'SET_SELECTED';
export const REMOVE_SELECT = 'REMOVE_SELECT';
export const ADD_FILTER = 'ADD_FILTER';
export const SET_FILTERED = 'SET_FILTERED';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const ADD_OPERATION = 'ADD_OPERATION';
export const SET_OPERATED = 'SET_OPERATED';
export const SET_OPERATION = 'SET_OPERATION';
export const REMOVE_OPERATION = 'REMOVE_OPERATION';
export const SET_OP_FILTERED = 'SET_OP_FILTERED';
export const ADD_FILTER_FIELD = 'SET_FILTER_FIELD';
export const SET_FILTER_VALUE = 'SET_FILTER_VALUE';
export const ADD_FILTER_VALUE = 'ADD_FILTER_VALUE';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';
export const COUNT_RECORDS = 'COUNT_RECORDS';
export const QUERY = 'QUERY';
export const CHANGE_SOURCE = 'CHANGE_SOURCE';
var VIEW_NAME = 'VW_CIRCUITO';

export const addOneSelect = (noValue : void) => (dispatch: Function) => {
    let values = getSelectFields(VIEW_NAME); //En la realidad habria que manejarlo con async await
    dispatch({
        type: ADD_ONE_SELECT,
        values: values,
        selectedValue: values[0].value,
        selectedText: values[0].text
    });
}

export const addAllSelect = (noValue : void) => (dispatch: Function) => {
    let values = getSelectFields(VIEW_NAME); //En la realidad habria que manejarlo con async await
    dispatch({
        type: ADD_ALL_SELECT,
        values : values,
        selectedValue: values[0].value,
        selectedText: values[0].text,
        selectedType: values[0].columnType
        
    });
}

export const setSelected = (index: number, value: string, text : string,columnType:string) => (dispatch: Function) => {
    dispatch({
        type: SET_SELECTED,
        index: index,
        selectedValue: value,
        selectedText: text,
        selectedType:columnType
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
        return { value: el.value, text: el.text };
    });
    let columnFilterTypes = values.map((el, ind) => {
        return { columnFilterType: el.columnFilterType }
    });
    let columnTypes = values.map((el, ind) => {
        return {columnType : el.columnType}
    })
    dispatch({
        type: ADD_FILTER,
        values: valueList,
        columnFilterTypes: columnFilterTypes,
        columnTypes: columnTypes,
        selectedColumnType: '',
        selectedValue: '',
        selectedOpValue: '',
        filterType: '',
        filterList: [],
        filterValue : '',
        selectedFilterList: ''
    });
}

export const setFiltered = (index: number, value: string, columnType: string) => (dispatch: Function) => {
    dispatch({
        type: SET_FILTERED,
        index: index,
        selectedValue: value,
        selectedColumnType: columnType
    });
}

export const setFilterValue = (index: number, value: string) => (dispatch: Function) => {
    dispatch({
        type: SET_FILTER_VALUE,
        index: index,
        filterValue : value
    });
}

export const addFilterValue = (index: number, value: string) => (dispatch: Function) => {
    dispatch({
        type: ADD_FILTER_VALUE,
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

export const addOperation = (noValue: void) => async(dispatch: Function) => {
    let values = await getOperationFields(VIEW_NAME);
    let operations = getOperations();

    dispatch({
        type: ADD_OPERATION,
        values : values,
        selectedValue: values[0].value,
        operations : operations,
        selectedOperation: operations[0].value
    })
}

export const setOperated = (index: number, value: string) => (dispatch: Function) => {
    dispatch({
        type: SET_OPERATED,
        index: index,
        selectedValue : value
    });
}

export const setOperation = (index: number, value: string) => (dispatch: Function) => {
    dispatch({
        type: SET_OPERATION,
        index: index,
        selectedOperation : value
    });
}

export const removeOperation = (index: number) => (dispatch: Function) => {
    dispatch({
        type: REMOVE_OPERATION,
        index: index
    });
}

export const closeModal = () => (dispatch: Function) => {
    dispatch({
        type: CLOSE_MODAL
    });
}

export const showModal = (title:string,message : string) => (dispatch: Function) => {
    dispatch({
        type: SHOW_MODAL,
        message: message,
        title:title
    });
}


const createBaseStatement = (selectLists: Array<Object>, filterLists: Array<Object>, operationLists: Array<Object>) : string => {
    let select = 'SELECT ';
    let from = 'FROM '+VIEW_NAME+' ';
    let where = 'WHERE 1=1 ';
    let groupBy = 'GROUP BY ';
    
    let fields = '';
    selectLists.map(
        (el, ind) => {
            fields += el.selectedValue + ',';
        }
    );

    if (fields.substring(fields.length - 1, fields.length) == ',') {
        fields = fields.substring(0, fields.length - 1) + ' ';
    }
    select += fields;
    groupBy += fields;

    if (operationLists.length > 0) {
        select += ',';
        operationLists.map(
            (el, ind) => {
                select += el.selectedOperation+'('+el.selectedValue + '),';
            }
        );
    }
    else {
        groupBy = '';
    }
    
    if (select.substring(select.length - 1, select.length) == ',') {
        select = select.substring(0, select.length - 1)+' ';
    }

    filterLists.map(
        (el) => {
            let val = '';
            switch (el.filterType) {
                case 'INPUT': 
                case 'DROPDOWN':
                    if (el.selectedColumnType == 'TEXT' || el.selectedColumnType == 'LINK') {
                        if (!el.filterValue || el.filterValue == '') {
                            el.filterValue = 'error';
                        }
                        val += `'` + el.filterValue + `'`;
                    }
                    else { //Para number
                        if (!el.filterValue || el.filterValue == '') {
                            el.filterValue = 0;
                        }
                        val += el.filterValue;
                    }
                    break;
                case 'DATE':
                        val += `TO_DATE('` + el.filterValue.format('DD/MM/YYYY') + `','DD/MM/RRRR')`;
                    break;
                case 'MULTIPLEINPUT':
                case 'MULTIPLEDROPDOWN':
                    val += '(';    
                    if (el.selectedColumnType == 'TEXT' || el.selectedColumnType == 'LINK') {
                        el.filterValue.map((el2) => {
                            val += `'` + el2 + `',`;
                        });
                    }
                    else {
                      el.filterValue.map((el2) => {
                          val += el2 + ',';
                      });
                    }
                    if (el.filterValue.length == 0) {
                        val += '0';
                    }

                    if (val.substring(val.length - 1, val.length) == ',') {
                      val = val.substring(0, val.length - 1);
                    }
                    val += ')';
                break;
              default:
                  null;
            }
            if (el.selectedValue != '' && el.selectedOpValue != '') {
                where += 'AND ' + el.selectedValue + ' ' + el.selectedOpValue + ' ' + val + ' ';
            }  
      }
    );  
    
    return select + from + where + groupBy;
}
const createCountStatement = (baseStatement: string) : string => {
    return(`SELECT COUNT(*) FROM (${baseStatement})`);
}

export const countRecords = (selectLists: Array<Object>, filterLists: Array<Object>, operationLists: Array<Object>) => async (dispatch: Function) => {
    const baseStatement = createBaseStatement(selectLists, filterLists, operationLists);
    const countStatement = createCountStatement(baseStatement);
    const view = await fetchMView();
    const recordCount = await fetchRecordCount(countStatement,view);
    dispatch({
        type: COUNT_RECORDS,
        baseStatement: baseStatement,
        countStatement: countStatement,
        recordCount: recordCount,
        view : view
    });
}

export const query = (baseStatement: string,view:string) => async (dispatch: Function) => {
    let results: Array<any> = await fetchRecords(baseStatement, view);
    let results2 = results.map((el, ind) => {
        return { '_id': ind,...el};
    });
    dispatch({
        type: QUERY,
        results: results2,
        view : view
    });
}

export const changeSource = (viewName: string) => async(dispatch: Function) => {
    let view;
    if (viewName == 'VIEW') {
        view = await fetchView();        
    }
    else {
        view = await fetchMView();
    }
    dispatch({
        type: CHANGE_SOURCE,
        view : view
    });
}