import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuthStore';
import { LoginPage } from '../auth/LoginPage';
import { RegisterPage } from '../auth/RegisterPage';
import { AdminApp } from '../admin/AdminApp';
import { CustomerRegister } from '../customer/CustomerRegister/CustomerRegister';
import { CustomerList } from '../customer/CustomerList/CustomerList';



export const AppRouter = () => {
    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);
    
    if (status === 'checking') return (<h2>Cargando...</h2>);    
    
    return (
        <Routes>
            {(status === 'authenticated')  
                ? (<>
                    <Route path='/admin' element={<AdminApp />}>
                        <Route path="/admin/customer-register" element={ <CustomerRegister /> } />
                        <Route path="/admin/customer-list" element={ <CustomerList /> } />
                        <Route path='*' element={<Navigate to='/admin/customer-register' replace />} />
                    </Route>
                    
                    <Route path="/*" element={ <Navigate to="/admin" /> } />
               </>)
                : (<>
                    <Route path="/auth/*" element={ <LoginPage /> } />
                    <Route path="/auth/register/" element={ <RegisterPage /> } />
                    <Route path="/*" element={ <Navigate to="/auth/login" /> } />
               </>)
            }
        </Routes>
    )
}
