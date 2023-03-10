<script>
    import TodoStore from '../stores/TodoStore.js';
    import {createTodo } from './fetch.js'

    // export let todo;
	let title = '';
    let notes = '';
    let dueDate = '';
    let priority = '';
    let isChecked = false;

    // addtodo
    const addTodo = async () => {
        console.log("addTodo >>>>>>....")
         const todoParam = {title, notes, due_date: dueDate, priority, is_checked: isChecked }
        if(title){
            const data = await createTodo(todoParam)
            const todo = data.todo
            TodoStore.update( currentTodos => currentTodos)
            
            document.querySelector('#title').value = ''
        }
    }
    
</script>

<form class ='todo-form' on:submit|preventDefault={addTodo}>
    <input type="text" id='title' placeholder="add title" bind:value={title}>
    <button>Add</button>
</form>
