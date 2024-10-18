import PropTypes from 'prop-types';
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
	const navigate = useNavigate();
	
	const handleClick = (event, path) => {
		event.preventDefault();
		navigate(path);
	}

	return (
		<Box
			component='nav'
			sx={{
				backgroundColor: '#1976d2',
				color: '#fff',
				width: { sm: 256 },
				boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
			}}
			aria-label='mailbox folders'
		>
			<Box sx={{ my: 3, mx: 2.5 }}>
				<Typography variant='h5' color='inherit' fontWeight='bold'>
					JSM
				</Typography>
			</Box>
			<Divider sx={{ backgroundColor: '#fff' }} />
			<List>
				<ListItem 
					button="true" 
					component='a' 
					href='/admin/customer-register' 
					sx={{ active: { color: 'red' } }}
					onClick={(event) => handleClick(event, '/admin/customer-register')}
				>
					<ListItemIcon>
						<PersonIcon sx={{ color: '#fff' }} />
					</ListItemIcon>
					<ListItemText primary='Customer' sx={{ color: '#fff' }}/>
				</ListItem>
			</List>
		</Box>
	)
}

Sidebar.propTypes = {
	drawerOpen: PropTypes.bool,
	drawerToggle: PropTypes.func,
	window: PropTypes.object,
}
