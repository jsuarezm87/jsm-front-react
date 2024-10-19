import React from 'react';;
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
  // const [users, setUsers] = useState([]);
  // const [userDeleteSuccess, setUserDeleteSuccess] = useState(false);
  // const [updateUserModal, setUpdateUserModal] = useState(false);
  // const [showUpdateUser, setShowUpdateUser] = useState({});

  // const dispatch = useDispatch();

  // const { getUsersData } = useSelector((state) => state.getUser);
  // const { successUserDelete } = useSelector((state) => state.userDelete);

  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, []);

  // useEffect(() => {
  //   setUsers(getUsersData?.users);
  // }, [getUsersData]);

  // const handleDeleteUser = (id) => {
  //   dispatch(deleteUser(id));
  // };

  // useEffect(() => {
  //   setUserDeleteSuccess(successUserDelete);
  // }, [successUserDelete]);

  // useEffect(() => {
  //   if (userDeleteSuccess) {
  //     Swal.fire({
  //       position: 'center',
  //       icon: 'success',
  //       title: 'Successfully deleted user',
  //       showConfirmButton: false,
  //       timer: 2000,
  //     });

  //     dispatch(getAllUsers());
  //   }
  // }, [userDeleteSuccess]);

  // const showUpdateUserHandler = (id) => {
  //   const user = users.find((user) => user._id === id);
  //   setShowUpdateUser(user);
  //   setUpdateUserModal(true);
  // };

  // const handleCloseModal = () => {
  //   setUpdateUserModal(false);
  //   setShowUpdateUser({});
  // };

  return (
    <>
      <Header elevation={0}>
        <Typography variant='h4' gutterBottom>
          Users
        </Typography>
      </Header>
      <GridContainer>
        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            {/* <TableBody>
              {users?.length > 0 &&
                users?.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <PersonIcon /> {`${user.name} ${user.lastName}`}
                    </TableCell>
                    <TableCell>
                      <EmailIcon /> {user.email}
                    </TableCell>
                    <TableCell>
                      <LocationOnIcon /> {user.address}
                    </TableCell>
                    <TableCell>
                      <PhoneIcon /> {user.phone}
                    </TableCell>
                    <TableCell>
                      <WcIcon /> {user.gender}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color='primary'
                        aria-label='Edit'
                        onClick={() => {
                          showUpdateUserHandler(user._id);
                        }}
                      >
                        <EditNoteIcon style={{ fontSize: 20 }} />
                      </IconButton>
                      <IconButton
                        color='secondary'
                        aria-label='Delete'
                        onClick={() => {
                          handleDeleteUser(user._id);
                        }}
                      >
                        <DeleteSweepIcon style={{ fontSize: 20 }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody> */}
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

