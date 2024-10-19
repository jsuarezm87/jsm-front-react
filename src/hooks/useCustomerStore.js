import { useDispatch, useSelector } from 'react-redux';
import { onCreateCustomer, onCreateCustomerError, clearErrorMessage  } from '../store/customer/customerSlice';
import loginApi from '../api/loginApi';

export const useCustomerStore = () => {

    const {statusCustomer, customerCreated, errorMessage} = useSelector(state => state.customer);
    const dispatch = useDispatch();

    const registerCustomer = async(customer) => {
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
        statusCustomer, 
        customerCreated, 
        errorMessage
    }

}