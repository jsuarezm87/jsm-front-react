import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        user: {},
        errorMessage: undefined,
    },
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.user   = {};
            state.errorMessage = undefined;
        },
        onLogin: (state, { payload }) => {
            state.status = 'authenticated';
            state.user = {...state.user, ...payload};
            state.errorMessage = undefined;
        },
        onLogout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.user   = {};
            state.errorMessage = payload;
        },
        onRegister: (state, { payload }) => {
            state.status = 'registered';
            state.user = {...state.user, ...payload};
            state.errorMessage = undefined;
        },
        onRegisterLogin: (state) => {
            state.status = 'authenticated';            
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }
    }
});

export const { 
    onChecking, 
    onLogin, 
    onLogout, 
    onRegister,
    onRegisterLogin,
    clearErrorMessage 
} = authSlice.actions;