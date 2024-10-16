
// import Swal from 'sweetalert2'

// import './styles/UserRegisterScreen.css'


// const registerFormFields = {
// 	name: '',
// 	lastName: '',
// 	email: '',
// 	password: '',
// 	gender: '',
// 	phone: '',
// 	address: '',
// }

// export const LoginPageApp = () => {





// 	return (
// 		<div className='login-container'>
// 			<div>
// 				<form  className='login-form'>
// 					<h3>User register</h3>
// 					<div className='form-pair'>
// 						<div className='form-group'>
// 							<input
// 								type='text'
// 								className='form-control'
// 								placeholder='name'
// 								name='name'
								
							
// 							/>
// 						</div>
// 						<div className='form-group'>
// 							<input
// 								type='text'
// 								className='form-control'
// 								placeholder='lastName'
// 								name='lastName'
								
							
// 							/>
// 						</div>
// 					</div>
// 					<div className='form-pair'>
// 						<div className='form-group'>
// 							<input
// 								type='text'
// 								className='form-control'
// 								placeholder='email'
// 								name='email'
						
// 							/>
// 						</div>
// 						<div className='form-group'>
// 							<input
// 								type='text'
// 								className='form-control'
// 								placeholder='password'
// 								name='password'
								
// 							/>
// 						</div>
// 					</div>
// 					<div className='form-pair'>
// 						<div className='form-group'>
// 							<input
// 								type='text'
// 								className='form-control'
// 								placeholder='gender'
// 								name='gender'
							
// 							/>
// 						</div>
// 						<div className='form-group'>
// 							<input
// 								type='text'
// 								className='form-control'
// 								placeholder='phone'
// 								name='phone'
							
// 							/>
// 						</div>
// 					</div>
// 					<div className='form-pair'>
// 						<div className='form-group'>
// 							<input
// 								type='text'
// 								className='form-control'
// 								placeholder='address'
// 								name='address'
								
// 							/>
// 						</div>
// 					</div>

// 					<div>
// 						<input type='submit' className='btnSubmit' value='Register' />
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	)
// }


// Third Party Dependencies.
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { useState, createRef, useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, Outlet, Route } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';


// export default function LoginPageApp({ ...rest }) {
  export const AdminApp = () => {
	// States and Variables.
	// const navigate = useNavigate()
	// Getting path name.
	const pathName = window.location.pathname
	// const dispatch = useDispatch()

	// const { userInfo } = useSelector((state) => state.userLogin)

	// useEffect(() => {
	// 	dispatch(refreshToken())
	// 	if (!userInfo) {
	// 		navigate('/auth/login')
	// 	}
	// }, [window.location.pathname])

	return (
		<Box
			sx={{
				display: 'flex',
				height: '100vh',
				overflow: 'hidden',
			}}
		>
			<Sidebar />
			<Box sx={{ width: '100%' }}>
				<Box sx={{ flexGrow: 1, width: '100%' }}>
					<AppBar position='static' sx={{ backgroundColor: '#fff', color: '#000' }}>
						<Toolbar>
							<IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
								<ArrowBackIcon />
							</IconButton>
							<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
								{pathName}
							</Typography>
						</Toolbar>
					</AppBar>
				</Box>
				<Suspense fallback={<div>Loader</div>}>
					<Outlet />
				</Suspense>
			</Box>
		</Box>
	)
}



