import { useDispatch, useSelector } from 'react-redux';
import { onCreateCustomer, onCreateCustomerError, clearErrorMessage, onCheckingCustomer  } from '../store/customer/customerSlice';
import loginApi from '../api/loginApi';
import { getErrors } from '../helpers/getErrors';

export const useCustomerStore = () => {

    const {statusCustomer, customerCreated, errorMessage} = useSelector(state => state.customer);
    const dispatch = useDispatch();

    const registerCustomer = async(customer) => {
        try {
            const { data } = await loginApi.post('/customer/create', customer);            
            dispatch( onCreateCustomer({ ...data }) );
            
        } catch (error) {
            console.log('error: ', error);
            const errors = getErrors(error);
            dispatch( onCreateCustomerError( errors || '--' ) );
        }
    }

    const checkingCustomer = () => {
        try {           
            dispatch( onCheckingCustomer() );            
        } catch (error) {
            dispatch( onCreateCustomerError( error || '--' ) );
        }        
    }


    return {
        registerCustomer,
        statusCustomer, 
        customerCreated, 
        errorMessage,
        checkingCustomer
    }

}