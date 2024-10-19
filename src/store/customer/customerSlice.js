import { createSlice } from '@reduxjs/toolkit';

export const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        statusCustomer: 'pending',
        customerCreated: {},
        errorMessage: undefined,
    },
    reducers: {
        onCreateCustomer: (state, { payload }) => {
            state.statusCustomer = 'customer-created';
            state.customerCreated = payload;
            state.errorMessage = undefined;
        },
        onCreateCustomerError: (state, { payload }) => {
            state.statusCustomer = 'customer-error-created';
            state.customerCreated = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }
    }
});

export const { 
    onCreateCustomer, 
    onCreateCustomerError,
    clearErrorMessage 
} = customerSlice.actions;