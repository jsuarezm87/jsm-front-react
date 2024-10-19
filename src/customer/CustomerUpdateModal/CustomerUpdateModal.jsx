import { Box, Button, Dialog, DialogContent, DialogTitle, FormControl, InputLabel, 
	     MenuItem, Select, TextField, DialogActions } from "@mui/material";
import { useState } from "react";
import { styled } from '@mui/system';

const FormContainer = styled(Box)(({ theme }) => ({
	marginTop: theme.spacing(2),
	display: 'flex',
	flexWrap: 'wrap',
	gap: theme.spacing(1), 
}));

export const CustomerUpdateModal = ({ open, handleClose, customer }) => {
    // const [status, setStatus] = useState(customer.status || ""); 

    // const handleStatusChange = (event) => {
    //     setStatus(event.target.value);
    // };

	

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Customer Information</DialogTitle>
            <DialogContent>
				<FormContainer>
					<Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200, marginBottom: 2 }}>
						<TextField label="Name" name="name" fullWidth size="small" defaultValue={customer.name} />
					</Box>
					<Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200, marginBottom: 2 }}>
						<TextField label="Last Name" name="lastname" fullWidth size="small" defaultValue={customer.lastname} />
					</Box>
					<Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200, marginBottom: 2 }}>
						<TextField label="Address" name="address" fullWidth size="small" defaultValue={customer.address} />
					</Box>
					<Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200, marginBottom: 2 }}>
						<TextField label="Phone" name="phone" fullWidth size="small" defaultValue={customer.phone} />
					</Box>
					<Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200, marginBottom: 2 }}>
						<TextField label="Phone 2" name="phone2" fullWidth size="small" defaultValue={customer.phone2} />
					</Box>
					<Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200, marginBottom: 2 }}>
						<TextField label="Email" name="email" fullWidth size="small" defaultValue={customer.email} />
					</Box>
					<Box sx={{ flex: '1 1 30%', minWidth: 100, maxWidth: 180, marginBottom: 2 }}>
						<FormControl fullWidth size="small">
							<InputLabel>Status</InputLabel>
							<Select 
								label="Status" 
								name="status" 
								defaultValue={customer.status}
								// value={status} 
								// onChange={handleStatusChange}
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
                <Button color="primary">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};
