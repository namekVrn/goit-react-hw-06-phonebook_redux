import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {addNumberPhone, deleteContacts } from '../contacts/contacts-action' // импорт action для функции createReducer - что бы не писать type
const itemsReduce = createReducer([], {
    [addNumberPhone]: (state, {payload}) => [payload, ...state],
    [deleteContacts] : (state, {payload}) => state.filter(({id})=>id !== payload)
})
// const itemsReduce = (state = [], { type, payload }) => {
//   switch (type) {
//     case 'addNumberPhone':
//       return [payload, ...state ];
//       case 'deleteContacts': {
//         return state.filter(({id})=>id !== payload)
//       }
//     default:
//       return state;
//   }
// };
const filterReducer = createReducer('', {
    'filterInput': (state, {payload})=>{return payload}
})
// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'filterInput':
//       return payload;
//     default:
//       return state;
//   }
// };

const contacts = combineReducers({
  items: itemsReduce,
  filter: filterReducer,
  
});
export default contacts;
