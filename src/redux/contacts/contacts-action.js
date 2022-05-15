import { v1 as uuid } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
// function pattern(obj){
//     console.log(obj)
//     return {
//         payload: {
//             id: uuid(),
//             date: new Date().toLocaleDateString('ru', {
//               year: 'numeric',
//               month: 'long',
//               day: 'numeric',
//               hour: 'numeric',
//               minute: 'numeric',
//               second: 'numeric',
//             }),
//             phone: obj.phone,
//             name: obj.name
//         }
       
//     }
// }

export const addNumberPhone = createAction('addNumberPhone', ({phone, name})=>{ // Второй параметр анонимная функция 
    return {
        payload: {
            id: uuid(),
            date: new Date().toLocaleDateString('ru', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
            }),
            phone,
            name,
        }
    }
});
// export const addNumberPhone = ({ name, phone }) => {
//   const addNumberPhone = {
//     id: uuid(),
//     date: new Date().toLocaleDateString('ru', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric',
//     }),
//     phone,
//     name,
//   };
//   return {
//     type: 'addNumberPhone',
//     payload: addNumberPhone,
//   };
// };
export const filterInput = createAction('filterInput'); // c createAction
// export const filterInput = (filterName)=>{ // без createAction
//     return {
//         type: "filterInput",
//         payload: filterName
//     }
// }

export const deleteContacts = createAction("deleteContacts"); // c createAction
// export const deleteContacts = (id)=>{ // без createAction
//     return {
//         type: "deleteContacts",
//         payload: id
//     }
// }