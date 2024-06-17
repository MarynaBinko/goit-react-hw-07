import contactsReducer from './contactsSlice';
import filtersReducer from './filterSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer
});

export const store = configureStore({
  reducer: rootReducer,
});