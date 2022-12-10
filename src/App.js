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
  const [noneCompletedItemsCount, setNoneCompletedItemsCount] = useState(0);
  const [editMode, setEditMode] = useState(false);
  // const [editMode, setEditMode] = useState(false);

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
    const newTodos = todos.concat({id: Date.now(), title, completed: false, edit:false});
    // or: todos = [...todos, {id: Date.now(), title, completed: false}]
    setTodos(newTodos);
    // setCount(count+1);
  }

  const removeTodo = (todoToRemove) => {
    const newTodosRemove = todos.filter(currentTodo => currentTodo.id !== todoToRemove.id);
    setTodos(newTodosRemove);
  }


  const markAsCompleted = (title) => {
    let newTask = todos.map(task => {
      if (task.id === title) {
        return ({...task, completed: !task.completed})
      }
      return task;
    })
    setTodos(newTask);
    console.log(newTask);
    // const completeItem = todos.map(todo => ({...title.id, completed: true}));
    // setTodos(completeItem);
    // console.log(completeItem);
  } 

  const clearAllCompletedItems = () => {
    const todosCompleted = todos.filter(currentTodo => !currentTodo.completed);
    console.log(todos);
    setTodos(todosCompleted);
  }

  const toggleAll = (checkedValue) => {
    const todosToggle = todos.map(todo => ({... todo, completed: checkedValue}));
    setTodos(todosToggle);
    console.log(todosToggle);
  }

  const dubleClickEditTask = (title) => {
      let editTask = todos.map(task => {
        if (task.id === title) {
          return ({...task, title:task.title, edit: !task.edit})
        }
        return task;
      })
      // console.log(editTask);
      // setEditMode(editTask.edit);
      setTodos(editTask);
    
  }
  
//   const updateTodoTask = (title) => {
//     const result = todos.find(({ title }) => title === title);
//     const updateTask = todos.map(task => {
//       if (task.id === id) {
//         return ({...task, title:title, edit: !task.edit})
//       }
//       return task;
//     })
//     setTodos(updateTask);
//     setEditMode(updateTask.edit);
//     console.log(updateTask);
//   }
//     console.log(result);
    
// return ({...task, title:result.title, edit: !task.edit})
//       }
//       return task;
//     })
//     setTodos(updateTask);
//     setEditMode(updateTask.edit);
//     console.log(updateTask);
//   }

  const updateTodoTask = (title) => {
    const updateTask = todos.map(task => {
      if (task.id.tile === title) {
        return ({...task, title:title, edit: !task.edit})
      }
      return task;
    })
    setTodos(updateTask);
    setEditMode(updateTask.edit);
    console.log(updateTask);
  }
        
        
  //       task => {
  //       if (task.id === title) {
  //         task.title = title;
  //       }
  //       console.log(task);
  //       return task;
  //     })
  //     setEditMode(editTask);
  //     setTodos(editTask);
  // }


  // todo: pass item left to footer.

  // todo: BONUS- when double-click on task - enable editing in place (double-click change item) 

  return (
    <section className="todoapp">
      <Header title={appTitle} onAddItem={addTodo} onToggleAllItems = {toggleAll} text="Add a task" />
      <Main items={todos} className='main' setTodos={setTodos} add={addTodo} onEditMode = {dubleClickEditTask} onHitEnter={updateTodoTask} onCompleteItem = {markAsCompleted} removeItem={removeTodo}/> 
      <Footer onClearCompleted={clearAllCompletedItems} itemLeftCount={noneCompletedItemsCount} className="footer"/>
    </section>
    );
  
}

export default App;
