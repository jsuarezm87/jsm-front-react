import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';

// Estilos personalizados
const FormContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  flexWrap: 'wrap', // Permite que los elementos se ajusten
  gap: theme.spacing(1), // Espacio entre elementos
}));

export const CustomerUpdateModal = ({ open, handleClose }) => {

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Customer Information</DialogTitle>
      <DialogContent>
        <FormContainer>
          <Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200 }}>
            <TextField label="Name" name="name" fullWidth size="small" />
          </Box>
          <Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200 }}>
            <TextField label="Last Name" name="lastname" fullWidth size="small" />
          </Box>
          <Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200 }}>
            <TextField label="Address" name="address" fullWidth size="small" />
          </Box>
          <Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200 }}>
            <TextField label="Phone" name="phone" fullWidth size="small" />
          </Box>
          <Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200 }}>
            <TextField label="Phone 2" name="phone2" fullWidth size="small" />
          </Box>
          <Box sx={{ flex: '1 1 30%', minWidth: 150, maxWidth: 200 }}>
            <TextField label="Email" name="email" fullWidth size="small" />
          </Box>
		  <Box sx={{ flex: '1 1 30%', minWidth: 100, maxWidth: 180 }}>
            <FormControl fullWidth size="small">
              <InputLabel>Status</InputLabel>
              <Select label="Status" name="status">
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
