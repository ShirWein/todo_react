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


export function Main({items, removeItem, completeItem, onToggleAllItems}) {



    function handleCompletedItem(event) {
            completeItem(event.target.value);
            console.log(event.target.value);
        } 
        
    function handleToggleAll(event) {
        onToggleAllItems(event.target.checked);
    }
           
    return (
        <main>
            <input className='toggle-all'
                type="checkbox"
                onChange={handleToggleAll} />
            <label for='toggle-all'></label>
            <ul className='todo-list'>
            {items.map(item => {
                return (<li><div className="view">
                <input className="toggle"
                    type="checkbox" onChange={handleCompletedItem}/>
                <label style={item.completed?{textDecoration: 'line-through'}: null}>{item.title}</label>
                <button className="destroy" onClick={() => removeItem(item)}/>
                </div>
                <input className="edit" /></li>)})}
            </ul>
        </main>
        )
}