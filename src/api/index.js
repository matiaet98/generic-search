//@flow

export function getSelectFields(viewName: string): Array<Object> {
    return [
        { 'text': 'text1', 'value': 'value1', 'columnType':'TEXT' }, 
        { 'text': 'text2', 'value': 'value2', 'columnType':'TEXT' },
        { 'text': 'text3', 'value': 'value3', 'columnType':'TEXT' },
        { 'text': 'text4', 'value': 'value4', 'columnType':'TEXT' },
        { 'text': 'text5', 'value': 'value5', 'columnType':'TEXT' }
    ];
}
export function getOperationFields(viewName : string): Array < Object > {
    return [
        { 'text': 'text1', 'value': 'value1' }, 
        { 'text': 'text2', 'value': 'value2' },
        { 'text': 'text3', 'value': 'value3' },
        { 'text': 'text5', 'value': 'value5' }
    ];
}

export function getFilterFields(viewName : string): Array < Object > {
    return [
        { 'text': 'text1', 'value': 'value1', 'columnFilterType' : 'INPUT' }, 
        { 'text': 'text2', 'value': 'value2', 'columnFilterType' : 'MULTIPLEINPUT' },
        { 'text': 'text3', 'value': 'value3', 'columnFilterType' : 'DATE' },
        { 'text': 'text4', 'value': 'value4', 'columnFilterType' : 'DROPDOWN' },
        { 'text': 'text5', 'value': 'value5', 'columnFilterType' : 'MULTIPLEDROPDOWN' }
    ];
}

export function getDropdownValues(viewName : string,columnName : string): Array < Object > {
    return [
        { 'text': 'col1', 'value': 'colValue1' }, 
        { 'text': 'col2', 'value': 'colValue2' },
        { 'text': 'col3', 'value': 'colValue3' },
        { 'text': 'col4', 'value': 'colValue4' }
    ];
}