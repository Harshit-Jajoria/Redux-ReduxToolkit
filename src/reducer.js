import { createReducer } from '@reduxjs/toolkit';
const initialState = {
  count: 2,
};
export const customReducer = createReducer(initialState, {
  increment: (state, action) => {
    state.count += 1;
  },

  incrementByValue: (state, action) => {
    state.count += action.payload;
  },
  
  decrement: (state, action) => {
    if(state.count>0)
        state.count -= 1;
  },
});

