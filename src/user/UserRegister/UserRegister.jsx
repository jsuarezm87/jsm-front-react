import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { registerUser } from '../../../redux/actions/userActions';
// import { useForm } from '../../../hooks/useForm';
// import { USER_REGISTER_RESET } from '../../../redux/constants/userConstants';
import Swal from 'sweetalert2';

import './styles/UserRegister.css';

const registerFormFields = {
	name: '',
	lastName: '',
	email: '',
	password: '',
	gender: '',
	phone: '',
	address: '',
}

export const UserRegister = () => {
	
	// const dispatch = useDispatch()
	// const { successRegisterUsers } = useSelector((state) => state.registerUser)
	// const [userRegisterSuccess, setUserRegisterSuccess] = useState(false)

	// useEffect(() => {
	// 	setUserRegisterSuccess(successRegisterUsers)
	// }, [successRegisterUsers])

	// useEffect(() => {
	// 	if (userRegisterSuccess) {
	// 		Swal.fire({
	// 			position: 'center',
	// 			icon: 'success',
	// 			title: 'successfully registered user',
	// 			showConfirmButton: false,
	// 			timer: 2000,
	// 		})

	// 		confirmSuccess()
	// 	}
	// }, [userRegisterSuccess])

	// const confirmSuccess = () => {
	// 	onResetForm()
	// 	dispatch({ type: USER_REGISTER_RESET })
	// 	setUserRegisterSuccess(false)
	// }

	// const {
	// 	name,
	// 	lastName,
	// 	email,
	// 	password,
	// 	gender,
	// 	phone,
	// 	address,
	// 	onInputChange: onRegisterInputChange,
	// 	onResetForm,
	// } = useForm(registerFormFields)

	// const registerSubmit = (event) => {
	// 	event.preventDefault()
	// 	dispatch(
	// 		registerUser({
	// 			name,
	// 			lastName,
	// 			email,
	// 			password,
	// 			gender,
	// 			phone,
	// 			address,
	// 		}),
	// 	)
	// }

	return (
		<div className='user-container'>
			<div>
				{/* <form onSubmit={registerSubmit} className='user-form'> */}
				<form className='user-form'>
					<h3>User register</h3>
					<div className='form-pair'>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								placeholder='name'
								name='name'
								width={{ width: '500px' }}
								// value={name}
								// onChange={onRegisterInputChange}
							/>
						</div>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								placeholder='lastName'
								name='lastName'
								// value={lastName}
								// onChange={onRegisterInputChange}
							/>
						</div>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								placeholder='identification'
								name='identification'
								// value={lastName}
								// onChange={onRegisterInputChange}
							/>
						</div>
					</div>
					<div className='form-pair'>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								placeholder='address'
								name='address'
								// value={lastName}
								// onChange={onRegisterInputChange}
							/>
						</div>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								placeholder='phone'
								name='phone'
								// value={lastName}
								// onChange={onRegisterInputChange}
							/>
						</div>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								placeholder='phone2'
								name='phone2'
								// value={lastName}
								// onChange={onRegisterInputChange}
							/>
						</div>						
						
					</div>
					<div className='form-pair'>
					<div className='form-group'>
							<input
								type='text'
								className='form-control'
								placeholder='email'
								name='email'
								// value={email}
								// onChange={onRegisterInputChange}
							/>
						</div>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								placeholder='status'
								name='status'
								// value={phone}
								// onChange={onRegisterInputChange}
							/>
						</div>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								placeholder='managedBy'
								name='managedBy'
								// value={address}
								// onChange={onRegisterInputChange}
							/>
						</div>
					</div>
					
					<div>
						<input type='submit' className='btnSubmit' value='Register' />
					</div>
				</form>
			</div>
		</div>
	)
}
