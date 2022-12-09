import './App.css';
import './index.css';
import {Header} from './header.js';
import {Main} from './main.js';
import List from './main.js';
import {Footer} from './footer.js';
import { useEffect, useState } from 'react';

function App() {

  const appTitle = 'Todo\'s App';

  const [todos, setTodos] = useState([]);
  // const [count, setCount] = useState(0);
  const [noneCompletedItemsCount, setNoneCompletedItemsCount] = useState(0);

  useEffect( ()=> {
    const uncompleted = todos.filter(todo=>!todo.completed);
    setNoneCompletedItemsCount(uncompleted.length);
  }, [todos])

  // useEffect(()=> {
  //   fetch('')
  //   .then(response => response.json())
  //   .then(setTodos)
  // }, [])

  // let todos = [
  //   {title: 'Learn React',
  //     completed: false},
  //   {title: 'Listen to Nir',
  //     completed: false},
  //   {title: 'Learn JS',
  //     completed: false}
  // ]
 

  // todo: 

  const addTodo = (title) => {
    const newTodos = todos.concat({id: Date.now(), title, completed: false});
    // or: todos = [...todos, {id: Date.now(), title, completed: false}]
    setTodos(newTodos);
    // setCount(count+1);
  }

  const removeTodo = (todoToRemove) => {
    const newTodosRemove = todos.filter(currentTodo => currentTodo.id !== todoToRemove.id);
    setTodos(newTodosRemove);
  }

  // const removeTodo = (title) => {
  //   const index = todos.indexOf(title);
    //q todos.splice(index, 1);
    
  // }

  const markAsCompleted = (title) => {
    // const newTodoList = todos.map(item => {
    //   if (item.title === title)
    //       return {title, completed: !item.completed} 
    //   return item; 
    //   })
      // console.log(newTodoList); 
  //   for (const obj of todos) {
  //     if (obj.title === title) {
  //        obj.completed = !obj.completed;
  //        break;
  //      }
  //    } 
  } 

  const clearAllCompletedItems = () => {
    const todosCompleted = todos.filter(currentTodo => !currentTodo.completed);
    console.log(todos);
    setTodos(todosCompleted);
  }

  const toggleAll = (checkedValue) => {
    const todosToggle = todos.map(todo => ({... todo, completed: checkedValue}));
    setTodos(todosToggle);
  }


  // todo: pass item left to footer.

  // todo: BONUS- when double-click on task - enable editing in place (double-click change item) 

  return (
    <section className="todoapp">
      <Header title={appTitle} onAddItem={addTodo} text="What needs to be done?" />
      <Main items={todos} onToggleAllItems = {toggleAll} className='main' completeItem = {markAsCompleted} removeItem={removeTodo}/> 
      <Footer onClearCompleted={clearAllCompletedItems} itemLeftCount={noneCompletedItemsCount} className="footer"/>
    </section>
    );
  
}

export default App;
