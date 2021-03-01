import React, { useState } from 'react';
import './TodoList.css';

import ListItem from "./ListItem";

function TodoList() {
    const [todos, setTodos] = useState([])
    const [addText, setAddText] = useState('')
    const [editObj, setEditObj] = useState({})

    const handleInputChange = (e) => {
        const { value } = e.target
        setAddText(value)

    }
    const addTodo = (addText) => {
        // 卡1- 這邊要這樣寫
        const id = new Date().getTime()
        const obj = { id: id, text: addText, isEdit: false }
        const newTodo = [...todos, obj]
        setTodos(newTodo)
        setAddText('')
    }
    const removeItem = (item) => {
        const removeItem = todos.filter((el, index, ary) => {
            return el.id !== item.id
        })
        setTodos(removeItem)
    }

    const handleEdit = (item, state) => {
        // 卡2- 原本不知道為何壞了 => 因為 setTodos 是陣列不小心改成物件
        const newTodos = Object.assign([], todos);
        newTodos.forEach(el => {
            if(el.id === item.id) {
                el.isEdit = !item.isEdit
                setTodos(newTodos)
            }
        })
        if(state === 'edit'){
            setEditObj(item)
        } 
    }

    const handleEditChange = (e) => {
        // 卡3- 一直出現紅字不知道為何 => 同卡2的格式需要注意
        // A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen.
        const newEdit = Object.assign({}, editObj);
        const { value } = e.target;
        newEdit.text = value;
        setEditObj(newEdit)
    }
    const handleEditCheck = () => {
        const newTodos = Object.assign([], todos);
        newTodos.forEach(el => {
            if(el.id === editObj.id) {
                el.text = editObj.text;
                el.isEdit = false;
                setTodos(newTodos)
                setEditObj({})
            }
        })
    }

    return (
        <div className='wrapper'>
            <div className='card frame'>
                <form>
                    <input type='text' className='input' value={addText} onChange={handleInputChange} />
                    <button type="button" onClick={() => addTodo(addText)}>Submit</button>
                </form>
                <ul className='list-wrapper'>
                    {todos.map(item => (
                        <ListItem 
                            key={item.id} 
                            item={item} 
                            handleEdit={handleEdit} 
                            handleEditChange={handleEditChange} 
                            editObj={editObj} 
                            handleEditCheck={handleEditCheck}
                            removeItem={removeItem} 
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList;