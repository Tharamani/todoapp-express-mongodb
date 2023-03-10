const url = 'http://localhost:4000'

const getTodos = async () => {
    const response = await fetch(`${url}/todo`)
    const data = await response.json()
    console.log('fetch getTodos ', data)
    return data
  }
  
  const createTodo = async (todo) => {
    const response = await fetch(`${url}/todo`, { // api call
      method: 'POST',
      body: JSON.stringify(todo) // diff b/w todo and this
    })

    const data = await response.json()
    console.log('fetch createTodo : ', data)
    if (!response.ok) {
      throw new Error('Error ', { cause: data.message })
    }
    return data
}

const updateTodo = async (todo) => {
  const response = await fetch(`${url}/todo/${todo._id}`, {
    method: 'PUT',
    body: JSON.stringify(todo)
  })

  const data = await response.json()
  if (!response.ok) {
    throw new Error('Error ', { cause: data.message })
  }

  return data
}

const deleteTodo = async (todo) => {
  const response = await fetch(`${url}/todo/${todo._id}`, {
    method: 'DELETE'
  })
  const data = await response.json()
  if (!response.ok) {
    throw new Error('Error ', { cause: data.message })
  }

  return data
}

    export { getTodos, createTodo, updateTodo, deleteTodo}
