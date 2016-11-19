//@flow

export function getSelectFields(viewName: string): Array<Object> {
    return [
        { 'text': 'text1', 'value': 'value1' }, 
        { 'text': 'text2', 'value': 'value2' },
        { 'text': 'text3', 'value': 'value3' },
        { 'text': 'text4', 'value': 'value4' },
        { 'text': 'text5', 'value': 'value5' }
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
export function getOperations(noValue: void): Array<Object>{
    return [
        { text: "Contar", value: "COUNT" }                                    
    ];
}

 

export function getFilterFields(viewName : string): Array < Object > {
    return [
        { 'text': 'text1', 'value': 'value1', 'columnType':'TEXT', 'columnFilterType' : 'INPUT' }, 
        { 'text': 'text2', 'value': 'value2', 'columnType':'TEXT', 'columnFilterType' : 'MULTIPLEINPUT' },
        { 'text': 'text3', 'value': 'value3', 'columnType':'DATE', 'columnFilterType' : 'DATE' },
        { 'text': 'text4', 'value': 'value4', 'columnType':'NUMBER', 'columnFilterType' : 'DROPDOWN' },
        { 'text': 'text5', 'value': 'value5', 'columnType':'TEXT', 'columnFilterType' : 'MULTIPLEDROPDOWN' }
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