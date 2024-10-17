import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuthStore';
import { LoginPage } from '../auth/pages/LoginPage';
import { RegisterPage } from '../auth/pages/RegisterPage';
import { AdminApp } from '../admin/AdminApp';
import { UserRegister } from '../user/UserRegister/UserRegister';

export const AppRouter = () => {
    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);
    
    if (status === 'checking') return (<h2>Cargando...</h2>);    
    
    return (
        <Routes>
            {(status === 'not-authenticated')  
                ? (<>
                        <Route path="/auth/*" element={ <LoginPage /> } />
                        <Route path="/auth/register/" element={ <RegisterPage /> } />
                        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
                   </>)
                : (<>
                        <Route path='/admin' element={<AdminApp />}>
                            <Route path="/admin/user-register" element={ <UserRegister /> } />
                            <Route path='*' element={<Navigate to='/admin/user-register' replace />} />
                        </Route>
                        
                        <Route path="/*" element={ <Navigate to="/admin" /> } />
                   </>)
            }
        </Routes>
    )
}
