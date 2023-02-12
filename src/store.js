import { configureStore } from '@reduxjs/toolkit';
import { customReducer } from './reducer';
const store = configureStore({
  reducer: {
    // here you send all the reducer
    custom: customReducer,
    
  },
});

export default store;
