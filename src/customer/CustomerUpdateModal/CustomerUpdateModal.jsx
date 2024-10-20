import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, InputLabel, 
	     MenuItem, Select, TextField, DialogActions } from "@mui/material";
import { useState } from "react";
import { styled } from '@mui/system';
import { useCustomerStore } from "../../hooks/useCustomerStore";
import { useForm } from "../../hooks/useForm";

const FormContainer = styled(Box)(({ theme }) => ({
	marginTop: theme.spacing(2),
	display: 'flex',
	flexWrap: 'wrap',
	gap: theme.spacing(1), 
}));

export const CustomerUpdateModal = ({ open, handleClose, customer }) => {

	const { updateCustomer } = useCustomerStore();
	const [infoModalData, setModalData] = useState(customer);

	const {
		name, 
		lastName, 
		address, 
		phone, 
		phone2,  
		email,  
		status,
		onInputChange: onRegisterInputChange,
		onResetForm,
	} = useForm(infoModalData);

	const handleSubmit = (event) => {
		event.preventDefault();	
		const newCustomer = {
			id: customer._id,
			name, 
			lastName, 
			address, 
			phone, 
			phone2,  
			email,  
			status,
		}	
		console.log('newCustomer: ', newCustomer)
		updateCustomer(newCustomer);		
	}
    

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Customer Information</DialogTitle>
            <DialogContent>
				<FormContainer>
					<Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200, marginBottom: 2 }}>
						<TextField 
							label="Name" 
							name="name" 
							fullWidth 
							size="small" 
							value={name} 
  							onChange={onRegisterInputChange}
						/>
					</Box>
					<Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200, marginBottom: 2 }}>
						<TextField 
							label="Last Name" 
							name="lastName" 
							fullWidth 
							size="small" 
							value={lastName} 
  							onChange={onRegisterInputChange}
						/>
					</Box>
					<Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200, marginBottom: 2 }}>
						<TextField 
							label="Address" 
							name="address" 
							fullWidth 
							size="small" 
							value={address} 
  							onChange={onRegisterInputChange}
						/>
					</Box>
					<Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200, marginBottom: 2 }}>
						<TextField 
							label="Phone" 
							name="phone" 
							fullWidth 
							size="small" 
							value={phone} 
  							onChange={onRegisterInputChange}
						/>
					</Box>
					<Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200, marginBottom: 2 }}>
						<TextField 
							label="Phone 2" 
							name="phone2" 
							fullWidth 
							size="small" 
							value={phone2} 
  							onChange={onRegisterInputChange}
						/>
					</Box>
					<Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200, marginBottom: 2 }}>
						<TextField 
							label="Email" 
							name="email" 
							fullWidth 
							size="small" 
							value={email} 
  							onChange={onRegisterInputChange}
						/>
					</Box>
					<Box sx={{ flex: '1 1 30%', minWidth: 100, maxWidth: 180, marginBottom: 2 }}>
						<FormControl fullWidth size="small">
							<InputLabel>Status</InputLabel>
							<Select 
								label="Status" 
								name="status" 
								value={status} 
  								onChange={onRegisterInputChange}
							>
								<MenuItem value="ACTIVO">ACTIVO</MenuItem>
								<MenuItem value="INACTIVO">INACTIVO</MenuItem>
							</Select>
						</FormControl>
					</Box>
			</FormContainer>

            </DialogContent>
            <DialogActions>				
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};
