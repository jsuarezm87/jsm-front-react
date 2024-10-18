import { createSlice } from '@reduxjs/toolkit';

export const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        status: 'checking',
        customer: {},
        errorMessage: undefined,
    },
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.customer   = {};
            state.errorMessage = undefined;
        },
        onCreateCustomer: (state, { payload }) => {
            state.status = 'customer-created';
            state.customer = payload;
            state.errorMessage = undefined;
        },
        onCreateCustomerError: (state, { payload }) => {
            state.status = 'customer-error-created';
            state.customer = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }
    }
});

export const { 
    onChecking, 
    onCreateCustomer, 
    onCreateCustomerError,
    clearErrorMessage 
} = customerSlice.actions;