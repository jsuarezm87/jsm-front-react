import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuthStore';
import { LoginPage } from '../auth/pages/LoginPage';
import { RegisterPage } from '../auth/pages/RegisterPage';
import { AdminApp } from '../admin/AdminApp';
import { CustomerRegister } from '../customer/CustomerRegister/CustomerRegister';



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
