import { useDispatch, useSelector } from 'react-redux';
import { clearErrorMessage, onChecking, onLogin, onLogout, onRegister, onRegisterLogin } from '../store/auth/authSlice';
import loginApi from '../api/loginApi';

export const useAuthStore = () => {

    const {status, user, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await loginApi.post('/auth',{ email, password });
            localStorage.setItem('token', data.token );
            localStorage.setItem('jsm-email', data.email );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid, email: data.email }) );
            
        } catch (error) {
            dispatch(onLogout('Credenciales invalidas'));
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const startRegister = async({ email, password, name }) => {
        dispatch( onChecking() );
        try {
            const { data } = await loginApi.post('/auth/create',{ email, password, name });
            localStorage.setItem('token', data.token );
            localStorage.setItem('jsm-email', data.email );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onRegister({ name: data.name, uid: data.uid, email: data.email }) );
            
        } catch (error) {
            dispatch( onLogout( error.response.data?.msg || '--' ) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const startRegisterLogin = async() => {       
        try {           
            dispatch( onRegisterLogin() );            
        } catch (error) {
            dispatch( onLogout( error.response.data?.msg || '--' ) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }


    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('jsm-email');
        if (!token) return dispatch( onLogout() );

        try {
            const { data } = await loginApi.get('auth/newtoken');
            localStorage.setItem('token', data.token );
            localStorage.setItem('jsm-email', email );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin({ name: data.name, uid: data.uid, email: email }) );
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout() );
    }

    return {
        startLogin,
        startLogout,
        errorMessage,
        status, 
        checkAuthToken,
        user, 
        startRegister,
        startRegisterLogin
    }

}