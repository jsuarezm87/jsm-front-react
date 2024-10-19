import { useState, useEffect } from 'react'

import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	TextField,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	Grid,
} from '@mui/material'

import Swal from 'sweetalert2'

export const CustomerUpdateModal = ({ handleCloseModal, updateCustomerModal, showUpdateCustomer }) => {
	// const dispatch = useDispatch()

	// const [infoModalData, setModalData] = useState(showUpdateUser)
	// const { successUpdateUsers } = useSelector((state) => state.userUpdate)
	// const [userUpdateSuccess, setUserUpdateSuccess] = useState(false)

	// useEffect(() => {
	// 	setUserUpdateSuccess(successUpdateUsers)
	// }, [successUpdateUsers])

	// useEffect(() => {
	// 	if (userUpdateSuccess) {
	// 		Swal.fire({
	// 			position: 'center',
	// 			icon: 'success',
	// 			title: 'successfully update user',
	// 			showConfirmButton: false,
	// 			timer: 2000,
	// 		})

	// 		confirmSuccess()
	// 	}
	// }, [userUpdateSuccess])

	// const confirmSuccess = () => {
	// 	dispatch({ type: USER_UPDATE_RESET })
	// 	setUserUpdateSuccess(false)
	// 	handleCloseModal()
	// }

	// const {
	// 	name,
	// 	lastName,
	// 	email,
	// 	password,
	// 	gender,
	// 	phone,
	// 	address,
	// 	onInputChange: onUpdateInputChange,
	// } = useForm(infoModalData)

	// const handleSubmit = (event) => {
	// 	event.preventDefault()
	// 	dispatch(
	// 		updateUser({
	// 			id: infoModalData._id,
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
		<Dialog
			open={updateCustomerModal}
			onClose={handleCloseModal}
			aria-labelledby='update-user-modal-title'
			fullWidth
			maxWidth='sm'
			scroll='body'
		>
			<DialogTitle id='update-user-modal-title'>Actualizar Usuario</DialogTitle>
			<DialogContent>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<TextField
							label='Nombre'
							name='name'
							// value={name}
							// onChange={onUpdateInputChange}
							fullWidth
							margin='normal'
							variant='standard'
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							label='Apellido'
							name='lastName'
							// value={lastName}
							// onChange={onUpdateInputChange}
							fullWidth
							margin='normal'
							variant='standard'
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							label='Correo Electrónico'
							name='email'
							// value={email}
							// onChange={onUpdateInputChange}
							fullWidth
							margin='normal'
							variant='standard'
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							label='Contraseña'
							name='password'
							type='password'
							// value={password}
							// onChange={onUpdateInputChange}
							fullWidth
							margin='normal'
							variant='standard'
						/>
					</Grid>
					<Grid item xs={4}>
						<FormControl fullWidth margin='normal' variant='standard'>
							<InputLabel>Género</InputLabel>
							{/* <Select name='gender' value={gender} onChange={onUpdateInputChange}> */}
							<Select name='gender' >
								<MenuItem value='Male'>Masculino</MenuItem>
								<MenuItem value='Female'>Femenino</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={4}>
						<TextField
							label='Teléfono'
							name='phone'
							// value={phone}
							// onChange={onUpdateInputChange}
							fullWidth
							margin='normal'
							variant='standard'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label='Dirección'
							name='address'
							// value={address}
							// onChange={onUpdateInputChange}
							fullWidth
							margin='normal'
							variant='standard'
						/>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
				{/* <Button onClick={handleCloseModal} color='secondary'> */}
				<Button  color='secondary'>
					Cancelar
				</Button>
				{/* <Button onClick={handleSubmit} color='primary'> */}
				<Button color='primary'>
					Guardar
				</Button>
			</DialogActions>
		</Dialog>
	)
}
