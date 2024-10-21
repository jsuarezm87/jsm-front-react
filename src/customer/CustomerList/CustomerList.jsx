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
import NumbersIcon from '@mui/icons-material/Numbers';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { styled } from '@mui/system';
// import UpdateUserModal from './UpdateUserModal';
import Swal from 'sweetalert2';
import { useCustomerStore } from '../../hooks/useCustomerStore';
import { CustomerUpdateModal } from '../CustomerUpdateModal/CustomerUpdateModal';

// Componentes estilizados
const Header = styled(Paper)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
  textAlign: 'center',
  marginTop: theme.spacing(4),
  marginLeft: theme.spacing(8),
  marginRight: theme.spacing(8),
  backgroundColor: 'lightgray',
}));


const GridContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginLeft: theme.spacing(8),
  marginRight: theme.spacing(8),
}));

export const CustomerList = () => {

  const { listCustomer, customerListAll, deleteCustomer, statusCustomer, checkingCustomer} = useCustomerStore();

  const [customers, setCustomers] = useState([]);
  const [updateCustomerModal, setUpdateCustomerModal] = useState(false);
  const [showUpdateCustomer, setShowUpdateCustomer] = useState({});

  useEffect(() => {
    listCustomer();
  }, []);

   useEffect(() => {
    if (customerListAll?.length > 0) {
      setCustomers(customerListAll);
    }
  }, [customerListAll]);

  useEffect(() => {
		if (statusCustomer === 'customer-delete') {		
      Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'successfully delete customer',
          showConfirmButton: false,
          timer: 2000,
      });
			checkingCustomer();
    }
	
	}, [statusCustomer]);


  const showUpdateCustomerHandler = (customer) => {
    setShowUpdateCustomer(customer); 
    setUpdateCustomerModal(true);
  }

  const handleCloseModal = () => {
		setUpdateCustomerModal(false);
		setShowUpdateCustomer({});
	}

  const handleDeleteCustomer = (id) => {
    deleteCustomer(id);
  }

  

  return (
    <>
      <Header elevation={0}>
        <Typography variant='h4' gutterBottom>
          Customers
        </Typography>
      </Header>      
      <GridContainer>
        {/* <TableContainer component={Paper} elevation={0}> */}
        <TableContainer component={Paper} elevation={0} sx={{ maxHeight: 400, overflowY: 'auto' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Identification</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Managed By</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers?.length > 0 &&
                customers.map((customer, index) => (
                  <TableRow key={index}>
                    <TableCell><PersonIcon /> {`${customer.name} ${customer.lastName}`}</TableCell>
                    <TableCell><NumbersIcon />{customer.identification}</TableCell>
                    <TableCell><LocationOnIcon /> {customer.address}</TableCell>
                    <TableCell><PhoneIcon /> {`${customer.phone} / ${customer.phone2}`}</TableCell>
                    <TableCell><EmailIcon /> {customer.email}</TableCell>
                    <TableCell>{(customer.status === 'ACTIVO' ? <ToggleOnIcon /> : <ToggleOffIcon />)  } {customer.status}
                    </TableCell>
                    <TableCell><EmailIcon /> {customer.managedBy}</TableCell>
                    <TableCell>
											<IconButton
												color='primary'
												aria-label='Edit'
												onClick={() => {
													showUpdateCustomerHandler(customer);
												}}
											>
												<EditNoteIcon style={{ fontSize: 20 }} />
											</IconButton>
											<IconButton
												color='secondary'
												aria-label='Delete'
												onClick={() => {
													handleDeleteCustomer(customer._id)
												}}
											>
												<DeleteSweepIcon style={{ fontSize: 20 }} />
											</IconButton>
										</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </GridContainer>

      {updateCustomerModal && (
        <CustomerUpdateModal
          open={updateCustomerModal}
          handleClose={handleCloseModal}
          customer={showUpdateCustomer}
        />
      )}

    </>
  );
};

