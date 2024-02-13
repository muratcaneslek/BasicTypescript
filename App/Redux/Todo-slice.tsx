import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDoState } from "../type/TypeTodo";
import { Todo } from "../type/TypeTodo";

const initialState: ToDoState = {
    todos: [],
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state, action: PayloadAction<Todo>)=> {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<Todo>)=> {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
    },
});

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;