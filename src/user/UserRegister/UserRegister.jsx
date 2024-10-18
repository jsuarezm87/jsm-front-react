import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
// import { registerUser } from '../../../redux/actions/userActions';

// import { USER_REGISTER_RESET } from '../../../redux/constants/userConstants';
import Swal from 'sweetalert2';
import './styles/UserRegister.css';



export const UserRegister = () => {

	const { user } = useSelector((state) => state.auth);

	const registerFormFields = useMemo(() => ({
		name: '', 
		lastName: '', 
		identification: '', 
		address: '', 
		phone: '', 
		phone2: '',  
		email: '',  
		status: 'ACTIVO',  
		managedBy: user?.email || ''  
	}), [user.email]);

	
	
	// const dispatch = useDispatch();
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

	const {
		name, 
		lastName, 
		identification, 
		address, 
		phone, 
		phone2,  
		email,  
		status,  
		managedBy,
		onInputChange: onRegisterInputChange,
		onResetForm,
	} = useForm(registerFormFields);



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
						{/* <div className='form-group'>
							<input
								type='text'
								className='form-control'
								placeholder='status'
								name='status'
								// value={phone}
								// onChange={onRegisterInputChange}
							/>
						</div> */}
                        <div className='form-group'>
                            <select
                                className='form-control'
                                name='status'
                                value={status} 
                                onChange={onRegisterInputChange}
                            >
                                <option value="ACTIVO">ACTIVO</option>
                                <option value="INACTIVO">INACTIVO</option>
                            </select>
                        </div>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								placeholder='managedBy'
								name='managedBy'
								value={managedBy}
								onChange={onRegisterInputChange}
								disabled
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
