import { createSlice } from '@reduxjs/toolkit';

export const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        statusCustomer: 'pending',
        customerCreated: {},
        customerListAll: [],	
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
        onCheckingCustomer: (state) => {
            state.statusCustomer = 'customer-finished';
        },
        onListCustomer: (state, { payload }) => {
            state.statusCustomer = 'customer-list';
            state.customerListAll = payload;
            state.errorMessage = undefined;
        },
        onListCustomerError: (state, { payload }) => {
            state.statusCustomer = 'customer-error-list';
            state.customerListAll =  [];
            state.errorMessage = payload;
        },
        onUpdateCustomer: (state, { payload }) => {
            state.statusCustomer = 'customer-updated';
            state.customerListAll = state.customerListAll.map( customer => {
                if ( customer._id === payload._id ) {
                    return payload;
                }

                return customer;
            });
            state.errorMessage = undefined;
        },
        onUpdateCustomerError: (state, { payload }) => {
            state.statusCustomer = 'customer-error-update';
            state.customerListAll =  [];
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
    clearErrorMessage,
    onCheckingCustomer,
    onListCustomer,
    onListCustomerError,
    onUpdateCustomer,
    onUpdateCustomerError 
} = customerSlice.actions;