'use client';

import { createSlice } from '@reduxjs/toolkit';
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('userState');
    if (serializedState === null) return { token: "", userDetails: {}, isLoggednIn: false };
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return { token: "", userDetails: {}, isLoggednIn: false };
  }
};
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('userState', serializedState);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
};
const initialState = loadFromLocalStorage();

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { token, user: userDetails, isLoggednIn } = action.payload;
      const newState = {
        ...state,
        token,
        userDetails,
        isLoggednIn,
      };
      saveToLocalStorage(newState); 
    },
    logoutUser: () => {
      saveToLocalStorage({ token: "", userDetails: {}, isLoggednIn: false });
      return { token: "", userDetails: {}, isLoggednIn: false };
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;