import {  useMemo } from 'react';
import { useForm } from '../../hooks/useForm';
import { useAuthStore } from '../../hooks/useAuthStore';
import Swal from 'sweetalert2';
import './styles/CustomerRegister.css';
import { useCustomerStore } from '../../hooks/useCustomerStore';



export const CustomerRegister = () => {

	const { user } = useAuthStore();
	const { registerCustomer, status: statusCustomer, customerCreated, errorMessage} = useCustomerStore();

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



	const registerSubmit = (event) => {
		event.preventDefault();
		registerCustomer({
			name, 
			lastName, 
			identification, 
			address, 
			phone, 
			phone2,  
			email,  
			status,  
			managedBy
		});		
	}

	return (
		<div className='user-container'>
			<div>
				<form onSubmit={registerSubmit} className='user-form'>
				{/* <form className='user-form'> */}
					<h3>Customer register</h3>
					<div className='form-pair'>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								placeholder='name'
								name='name'
								width={{ width: '500px' }}
								value={name}
								onChange={onRegisterInputChange}
							/>
						</div>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								placeholder='lastName'
								name='lastName'
								value={lastName}
								onChange={onRegisterInputChange}
							/>
						</div>
						<div className='form-group'>
							<input
								type='number'
								className='form-control'
								placeholder='identification'
								name='identification'
								value={identification}
								onChange={onRegisterInputChange}
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
								value={address}
								onChange={onRegisterInputChange}
							/>
						</div>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								placeholder='phone'
								name='phone'
								value={phone}
								onChange={onRegisterInputChange}
							/>
						</div>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								placeholder='phone2'
								name='phone2'
								value={phone2}
								onChange={onRegisterInputChange}
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
								value={email}
								onChange={onRegisterInputChange}
							/>
						</div>
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
