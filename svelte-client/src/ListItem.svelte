<script>
    import TodoStore from '../stores/TodoStore.js';
    import { deleteTodo, updateTodo } from './fetch.js';
    
    // Register the prop in the child component
    // To register the prop, 
    // we declare a variable in the child component with the same name as the prop 
    // and export it in the script block.
    export let todo;
    console.log('todo in item', todo)

  let placeholder = 'Select';
	
    const updateStoreData = async (todo) => {
        console.log("updateStoreData todo ", todo)

        const data = await updateTodo(todo)
            
        console.log("updateStoreData", data)

        TodoStore.update(currentTodos => currentTodos)

    //     TodoStore.update(currentTodos=> {
    //         let updatedTodo = currentTodos.find((item) => item.id === todo.id)
    //         // console.log('updateStoreData updatedTodo',  todo )
    //         updatedTodo = data
    //         console.log("updatedTodo", updatedTodo)
    //         return currentTodos
    //     })
    }

    const toggleCheckbox = async (todo) => {
    
        todo.is_checked = !todo.is_checked

        console.log("updateStoreData todo ", todo)

        const data = await updateTodo(todo)
            
        console.log("updateStoreData", data)

        TodoStore.update(currentTodos => currentTodos)
        // TodoStore.update(currentTodos => {
        //     const updatedTodo = currentTodos.find((item) => item.id === todo.id)
        //     console.log('toggleCheckbox updatedTodo',  updatedTodo.is_checked )
        //     updatedTodo.is_checked = !todo.is_checked
        //     return currentTodos
        // })
    }

    const handleDelete = async(todo) => {
        const data = await deleteTodo(todo)
        console.log("handleDelete", data)

        TodoStore.update(currentTodos => currentTodos)

    //     TodoStore.update(currentTodos => {
    //             const remainingTodos = currentTodos.filter(item=>item.id !== todo.id)
    //             console.log('handleDelete remainingTodos',  remainingTodos )
    //             return remainingTodos
    //     })  
    }

    const toggleEditItems = (e) => {
        console.log(e.target)
    }

</script>
    
    <div class="todo-item">
        <div>
            <input type="checkbox" bind:checked={todo.is_checked} on:click={toggleCheckbox(todo)}>
            <input type="text" bind:value={todo.title} on:click={(e)=> toggleEditItems(e)}  on:change={() => updateStoreData(todo)}>
        </div>
        
        <div class="edit-todo-item">
            <textarea type="text" placeholder="Notes" bind:value={todo.notes} on:change={() => updateStoreData(todo)}></textarea>
            <label>Priority
            <select bind:value={todo.priority} on:change={() => updateStoreData(todo)}>
                {#if placeholder}
                <option value="" disabled selected>{placeholder}</option>
            {/if}
                <option value="High">High</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
            </select>
        </label>
        <label>Due Date
           <input type="datetime-local" bind:value={todo.due_date} on:change={() => updateStoreData(todo)}/>
        </label>
        <button on:click={handleDelete(todo)}>Delete</button>
        </div>
    </div>