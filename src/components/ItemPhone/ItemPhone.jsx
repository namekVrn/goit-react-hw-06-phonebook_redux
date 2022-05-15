import { useDispatch, useSelector } from "react-redux"
import {deleteContacts } from "redux/contacts/contacts-action"
import "../ItemPhone/itemPhone.css"
const ItemPhone = () => {
    const items = useSelector(state=>state.contacts.items)
    const filterName = useSelector(state=>state.contacts.filter)
    const dispatch = useDispatch()
    const deleteItem = (id)=>{
        if(id){
            dispatch(deleteContacts(id))
        }
    }
    return (
        <div className="itemPhone">
        {items && items.filter(({name, id})=>name.toLowerCase().includes(filterName)).map(el=> 
        <li key={el.id} className="itemPhone__item">
            <p className="itemPhone__item--name">Имя:{el.name}</p>
            <p className="itemPhone__item--phone">Телефон: {el.phone}</p>
            <p className="itemPhone__item--date">{el.date}</p>
            <button type="text" onClick={()=>deleteItem(el.id)}>Удалить</button>
        </li>)}
        </div>
    )
}
export default ItemPhone