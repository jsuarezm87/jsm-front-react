import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { customerSlice } from './customer/customerSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        customer: customerSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});