import PropTypes from 'prop-types';
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export const Sidebar = () => {
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
				<ListItem button="true" component='a' href='/admin/user-register' sx={{ active: { color: 'red' } }}>
					<ListItemIcon>
						<PersonIcon sx={{ color: '#fff' }} />
					</ListItemIcon>
					<ListItemText primary='Usuarios' sx={{ color: '#fff' }}/>
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
