import React, { useEffect, useRef } from 'react';

export function Header({text, title, onAddItem, onToggleAllItems}) {

    //*Reference to input element and make it focused in the first render
    const inputRef = useRef(null);
    useEffect( ()=> {
        console.log(inputRef);
        inputRef.current.focus();

    }, [])

    function handleTaskInput(event) {
        if (event.key === 'Enter') {            
            onAddItem(event.target.value);
            console.log(event.target.value);
            

            }
        };
    
    function handleToggleAll(event) {
            onToggleAllItems(event.target.checked);
        }

    return (
    <header className='header'>
        <h1>{title}</h1>
        <input className='new-todo' 
                placeholder={text}
                onKeyUp={handleTaskInput}
                ref={inputRef}
                />
            <input className='toggle-all'
                type="checkbox"
                onChange={handleToggleAll} />
            <label htmlFor='toggle-all'></label>
    </header>
    );
}