import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ListItem = ({item, handleEdit, handleEditChange, editObj, handleEditCheck, removeItem}) => {
    

    return (
        <li>
            <div className="txt">
                <input type="checkbox"/>
                {item.isEdit || (<span> {item.text} </span>)}
                {item.isEdit && (<input type="text" value={editObj.text} onChange={handleEditChange} />)}
            </div>
            <div>
                {/* 這邊帶值的方式 */}
                {item.isEdit ? 
                (<span onClick={() => handleEdit(item, 'close')}><FontAwesomeIcon icon={['fas', 'times']} /></span>):
                (<span onClick={() => handleEdit(item,'edit')}><FontAwesomeIcon icon={['fas', 'edit']} /></span>)
                }
                
                {item.isEdit && (<span onClick={handleEditCheck}><FontAwesomeIcon icon={['fas', 'check']} /></span>)}
                <span onClick={() => removeItem(item)}><FontAwesomeIcon icon={['fas', 'trash-alt']} /></span>
            </div>
        </li>
    )
}
export default ListItem;