import { createSlice , nanoid } from "@reduxjs/toolkit";
//nanoid for creating unique ids

const initialState = {
    todos : [{id:nanoid() , text:"Hello World"}]
}

// Simple words mein, slice aapke kisi ek feature ke data aur us data ko update karne ke rules ka collection hai.
export const todoSlice = createSlice({
    name : 'todo',
    // initialState ka matlab hai application ki state ki starting value.
    initialState,
    // Reducers, yani data ko update karne ke functions.
    // Reducers woh functions hain jo define karte hain ke state mein kis tarah ki changes ho sakti hain.
    reducers : {
        // state ap ko initial state ki values ka access deta ha
        addTodo : (state , action) => {
            const todo = {
                id: nanoid(),
                text: action.payload //action.payload woh data hai jo aap addTodo ko bhejte hain. action aik plain object hota ha 
            }

            state.todos.push(todo)
        },


        removeTodo : (state , action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
    }
})

export const {addTodo , removeTodo} = todoSlice.actions
// Yeh generated reducer export karta hai, jise Redux store mein register karna hota hai.
export default todoSlice.reducer