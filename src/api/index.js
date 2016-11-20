//@flow

export function getSelectFields(viewName: string): Array<Object> {
    return [
        { 'text': 'text1', 'value': 'value1','columnType':'LINK' }, 
        { 'text': 'text2', 'value': 'value2','columnType':'TEXT' },
        { 'text': 'text3', 'value': 'value3','columnType':'DATE' },
        { 'text': 'text4', 'value': 'value4','columnType':'NUMBER' },
        { 'text': 'text5', 'value': 'value5','columnType':'TEXT' }
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
        { 'text': 'text1', 'value': 'value1', 'columnType':'LINK', 'columnFilterType' : 'INPUT' }, 
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

export function fetchRecordCount(countStatement: string,view : string): Promise<number>{
    return new Promise((resolve, reject) => {
        if (countStatement) {
            resolve(1001);            
        }
        else {
            reject(1000);
        }
    });
}

export function fetchRecords(baseStatement: string,view : string): Promise<Array<any>>{
    return new Promise((resolve, reject) => {
        let result = [
            { value1: 'http://www.google.com', value2: 'exacto', value3: '15/07/2001', value4: '1540', value5: 'aaabbbb' },
            { value1: 'goto?val1=v1&val2=v2', value2: 'exacto2', value3: '', value4: '1541', value5: 'aaabbbb' },
            { value1: 'goto?val1=v1&val2=v2', value2: 'exacto3', value3: '15/07/1999', value4: '', value5: 'aaabbbb' },
            { value1: 'goto?val1=v1&val2=v2', value2: 'aexacto', value3: '15/06/2001', value4: '', value5: 'aaabbbb' },
            { value1: 'goto?val1=v1&val2=v2', value2: 'dsdexacto', value3: '16/07/2001', value4: '1540', value5: 'aaabbbb' },
            { value1: 'goto?val1=v1&val2=v2', value2: 'exafecto', value3: '15/07/2001', value4: '1540', value5: 'aaabbbb' },
            { value1: 'goto?val1=v2&val2=v1', value2: 'exacsadsato', value3: '15/07/2001', value4: '1540', value5: 'aaabbbb' },
            { value1: 'goto?val1=v1&val2=v2', value2: 'exactfeeedededwwo', value3: '15/07/2001', value4: '1540', value5: 'aaabbbb' },
            { value1: 'goto?val1=v1&val2=v2', value2: '', value3: '15/07/2001', value4: '1540', value5: 'aaabbbb' },
            { value1: 'goto?val1=v1&val2=v2', value2: '22', value3: '15/07/2001', value4: '1540', value5: '' },
            { value1: '', value2: 'ddd', value3: '15/01/1800', value4: '1234,58', value5: 'sssa aassa qwwq' },
            { value1: 'gozzzto?val1=v1&val2=v2', value2: '242', value3: '20/02/2001', value4: '-1', value5: '' }
        ];
        if (view == 'VW_CIRCUITO') {
            result.push({ value1: 'go1&val2=v2', value2: '1000', value3: '01/02/2002', value4: '10', value5: 'rted' });
        }
        resolve(result);
        
    });
}

export function fetchView(noValue: void): Promise<string>{
    return new Promise((resolve, reject) => {
        resolve('VW_CIRCUITO');        
    });
}

export function fetchMView(noValue: void): Promise<string>{
    return new Promise((resolve, reject) => {
        resolve('MV_CIRCUITO');        
    });
}