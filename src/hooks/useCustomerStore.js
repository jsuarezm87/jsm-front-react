import { useDispatch, useSelector } from 'react-redux';
import { onChecking, onCreateCustomer, onCreateCustomerError, clearErrorMessage  } from '../store/customer/customerSlice';
import loginApi from '../api/loginApi';

export const useCustomerStore = () => {

    const {status, customerCreated, errorMessage} = useSelector(state => state.customer);
    const dispatch = useDispatch();

    const registerCustomer = async(customer) => {
        dispatch( onChecking() );
        try {
            const { data } = await loginApi.post('/customer/create', customer);;
            dispatch( onCreateCustomer({ ...data }) );
            
        } catch (error) {
            dispatch( onCreateCustomerError( error.response.data?.msg || '--' ) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }


    return {
        registerCustomer,
        status, 
        customerCreated, 
        errorMessage
    }

}