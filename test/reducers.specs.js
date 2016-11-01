//@flow
import { describe, it } from 'mocha';
import { expect } from 'chai';
import reducer from '../src/reducers';
import { ADD_ONE_SELECT, ADD_ALL_SELECT, SET_SELECTED, REMOVE_SELECT } from '../src/actions';


let lista = [
    { text: 'text1', value: 'value1' },
    { text: 'text2', value: 'value2' }
];

let emptyList = {};

let nodo = { text: 'text3', value: 'value3' };

let addOneAction = { type: ADD_ONE_SELECT, values: lista, selectedValue: lista[0].value };
let addAllAction = { type: ADD_ALL_SELECT, values: lista, selectedValue: lista[0].value };
let selectAction = { type: SET_SELECTED, index: 0, selectedValue: 'value1' };
let removeAction = { type: REMOVE_SELECT, index: 0 };

describe('ADD_ONE_SELECT reducer', () => {
    let list = reducer(emptyList, addOneAction);
    console.log(list);
    it('Deberia crear el objeto lists', () => {
        expect(list)
            .to.exist
            .and.to.be.an('object')
            .and.to.have.property('lists');
    });
    it('El objeto lists deberia ser un array con un solo elemento', () => {
        expect(list.lists)
            .to.be.an('array')
            .and.to.have.property('length').that.is.equals(1)
    });
    it('Deberia tener valores para el combo', () => {
        expect(list.lists[0])
            .to.have.property('values')
            .that.is.an('array')
            .that.have.property('length').that.is.above(0);
    });
    it('El primer valor deberia ser el predeterminado', () => {
        expect(list.lists[0])
            .and.to.have.property('selectedValue')
            .that.is.an('string')
            .that.is.equals(list.lists[0].values[0].value);
    });
});