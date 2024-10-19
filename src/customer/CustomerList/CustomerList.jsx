import React, { useEffect, useState } from 'react';;
import {
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import WcIcon from '@mui/icons-material/Wc';
import { styled } from '@mui/system';
// import UpdateUserModal from './UpdateUserModal';
import Swal from 'sweetalert2';
import { useCustomerStore } from '../../hooks/useCustomerStore';

// Componentes estilizados
const Header = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
}));

const GridContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginLeft: theme.spacing(8),
  marginRight: theme.spacing(8),
}));

export const CustomerList = () => {

  const { listCustomer, statusCustomer, checkingCustomer, errorMessage, customerListAll} = useCustomerStore();

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    listCustomer();
  }, []);

   useEffect(() => {
    if (customerListAll?.length > 0) {
      setCustomers(customerListAll);
    }
  }, [customerListAll]);

  

  return (
    <>
      <Header elevation={0}>
        <Typography variant='h4' gutterBottom>
          Customers
        </Typography>
      </Header>
      <GridContainer>
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Identification</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Phone 2</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Managed By</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers?.length > 0 &&
                customers.map((customer, index) => (
                  <TableRow key={index}>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.lastName}</TableCell>
                    <TableCell>{customer.identification}</TableCell>
                    <TableCell>{customer.address}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>{customer.phone2}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.status}</TableCell>
                    <TableCell>{customer.managedBy}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </GridContainer>

      {/* {updateUserModal && (
        <UpdateUserModal
          handleCloseModal={handleCloseModal}
          updateUserModal={updateUserModal}
          showUpdateUser={showUpdateUser}
        />
      )} */}

    </>
  );
};

