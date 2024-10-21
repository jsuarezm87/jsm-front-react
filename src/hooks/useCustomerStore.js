import { useDispatch, useSelector } from 'react-redux';
import { onCreateCustomer, onCreateCustomerError, clearErrorMessage, onCheckingCustomer, 
    onListCustomer, onListCustomerError, onUpdateCustomer, onUpdateCustomerError,  
    onDeleteCustomer,
    onDeleteCustomerError} from '../store/customer/customerSlice';
import loginApi from '../api/loginApi';

export const useCustomerStore = () => {

    const {statusCustomer, customerCreated, errorMessage, customerListAll} = useSelector(state => state.customer);
    const dispatch = useDispatch();

    const registerCustomer = async(customer) => {
        try {
            const { data } = await loginApi.post('/customer/create', customer);            
            dispatch( onCreateCustomer({ ...data }) );            
        } catch (error) {
            console.log('error: ', error);
            dispatch( onCreateCustomerError( error.response.data.errors || '--' ) );
        }
    }

    const checkingCustomer = () => {
        try {           
            dispatch( onCheckingCustomer() );            
        } catch (error) {
            dispatch( onCreateCustomerError( error || '--' ) );
        }        
    }

    const listCustomer = async() => {
        try {
            const { data } = await loginApi.get('/customer/list');          
            dispatch( onListCustomer(data) );            
        } catch (error) {
            console.log('error: ', error);
            dispatch( onListCustomerError( error.response.data.errors || '--' ) );
        }
    }

    const updateCustomer = async(customer) => {
        try {    
            const { data } = await loginApi.put(`/customer/update/${ customer.id }`, customer );    
            dispatch( onUpdateCustomer(data) );            
        } catch (error) {
            console.log('error: ', error);
            dispatch( onUpdateCustomerError( error.response.data.errors || '--' ) );
        }
    }

    const deleteCustomer = async(id) => {
        try {    
            const { data } = await loginApi.put(`/customer/delete/${id}` );    
            dispatch( onDeleteCustomer(data) );            
        } catch (error) {
            console.log('error: ', error);
            dispatch( onDeleteCustomerError( error.response.data.errors || '--' ) );
        }
    }


    return {
        registerCustomer,
        statusCustomer, 
        customerCreated, 
        errorMessage,
        checkingCustomer,
        listCustomer,
        customerListAll,
        updateCustomer,
        deleteCustomer
    }

}