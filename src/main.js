import React from 'react';


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


export function Main({items, removeItem, onCompleteItem, onToggleAllItems}) {


    // function handleCompletedItem(event) {
    //     onCompleteItem(event.target.checked);
    // }
     
        
    
           
    return (
        <main>
            
            <ul className='todo-list'>
            {items.map(item => {
                return (<li className={item.completed ? 'completed' : ''}><div className="view">
                <input className="toggle"
                    type="checkbox" onChange={() => onCompleteItem(item.id)}/>
                <label style={item.completed?{textDecoration: 'line-through'}: null}>{item.title}</label>
                <button className="destroy" onClick={() => removeItem(item)}/>
                </div>
                <input className="edit" /></li>)})}
            </ul>
        </main>
        )
}