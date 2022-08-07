import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todos',
  initialState:[
    {
      id: 1,
      status: false,
      description:"description1",
    },
  ],
  reducers: {
    create: (state, action) => {
      const newTodo = {
        id: Date.now(),
        status: false,
        description: action.payload.description
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].status = action.payload.status;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id)
    }
  },
})

// Action creators are generated for each case reducer function
export const { create, toggleComplete, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
