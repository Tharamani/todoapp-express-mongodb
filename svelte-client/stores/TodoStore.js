import { writable } from 'svelte/store';

// create an default values
let todos = []

// Create a Writable store that allows both updating and reading by subscription.
let todoStore = writable(todos);

// export the store for usage elsewhere
export default todoStore