import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

  return (
   <form className='todo-form' onSubmit={handleSubmit}>
    {props.edit ? (
        <>
        <input
        placeholder='Update Your Todo'
        value={input}
        onChange={handleChange}
        name='text'
        ref={inputRef}
        className='todo-input edit'
        />
        <button onClick={handleSubmit} className='todo-button edit'>
            Update
        </button>
        </>
    ):(
        <>
            <input placeholder='Add a ToDo'
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
            />
            <button onClick={handleSubmit} className='todo-button'>
                Add Todo
            </button>
        </>
    )}
   </form>
  );
}

export default TodoForm;
