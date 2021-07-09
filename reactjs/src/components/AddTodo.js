import React, { useState } from 'react'

const AddTodo = (props) => {
    const [textInput, setTextInput] = useState('');

    const onHandleValue = (e) => {
        setTextInput(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.onAdd(textInput);
        setTextInput('')
    }

    return (
        <>
            <form className="form-add" onSubmit={onSubmit}>
                <input type="text" value={textInput} placeholder="Thêm việc cần làm..." onChange={onHandleValue} className="input-add" />
                <button className="btn-add">Thêm</button>
            </form>
        </>
    )
}

export default AddTodo
