import React from 'react';
import { useState } from 'react';


// function List({items}) {
//     return (<ul>
//         {items.map(item => <li>{item}</li>)}
//     </ul>);
// }

// export default function Main({className}) {
//     return (<main className={className}>
//         <input className='toggle-all'
//                type="checkbox" />
//         <List items={['banana', 'apple', 'Melon']} /> 
//     </main>);
// }


export function Main({items, removeItem, onCompleteItem, onToggleAllItems, onEditMode}) {


    // function handleCompletedItem(event) {
    //     onCompleteItem(event.target.checked);
    // }
    function handleEditInput(event) {
        if (event.key === 'Enter') {            
            console.log(event.target.value);
            onEditMode(event);
            event.title = event.target.value
            return (<label>(event.target.value)</label>);

            }
        };
    
    // function handleEditMode (id) {
    //     onEditMode(event.target.value);
    // }
    
   

    return (
        <main>
            
            <ul className='todo-list'>
            {items.map(item => {
                return (<li className={(item.completed ? 'completed' : '') || (item.edit ? 'editing' : '')} >
                    <div onDoubleClick={() =>onEditMode(item.id)} className="view">
                <input className="toggle"
                    type="checkbox" onChange={() => onCompleteItem(item.id)}/>
                <label style={item.completed?{textDecoration: 'line-through'}: null}>{item.title}</label>
                <button className="destroy" onClick={() => removeItem(item)}/>
                </div>
                <input type='text' className="edit" onKeyUp={handleEditInput} />
                </li>
                )})}
            </ul>
        </main>
        )
}