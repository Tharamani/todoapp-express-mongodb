<script>
import ListItem from './ListItem.svelte'
import TodoStore from '../stores/TodoStore.js'
import { onMount } from 'svelte';
import {getTodos} from './fetch.js'

 let todos = [];

    onMount(async () => {
        // store is an object with a subscribe method that allows interested parties to be 
        // notified whenever the store value changes.
        TodoStore.subscribe(async data => {
                data = await getTodos();
		todos = data
                console.log('store app data,todos' ,data,  todos)
	})
    });

</script>

<div class="todo-list">
        {#each todos as todo }
        <ListItem {todo} />
        {/each}
</div>