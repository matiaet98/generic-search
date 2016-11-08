//@flow
export function getSelectFields(viewName : string): Array < Object > {
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
        { 'text': 'text2', 'value': 'value2', 'columnFilterType' : 'INPUT' },
        { 'text': 'text3', 'value': 'value3', 'columnFilterType' : 'DATE' },
        { 'text': 'text5', 'value': 'value5', 'columnFilterType' : 'DROPDOWN' }
    ];
}