import PropTypes from 'prop-types'

// material-ui
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import ApartmentIcon from '@mui/icons-material/Apartment'
import ReceiptIcon from '@mui/icons-material/Receipt'

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
					GMT
				</Typography>
			</Box>
			<Divider sx={{ backgroundColor: '#fff' }} />
			<List>
				<ListItem button component='a' href='/admin/user-page' sx={{ active: { color: 'red' } }}>
					<ListItemIcon>
						<PersonIcon sx={{ color: '#fff' }} />
					</ListItemIcon>
					<ListItemText primary='Usuarios' />
				</ListItem>
				<ListItem button component='a' href='/admin/clientes' sx={{ active: { color: 'red' } }}>
					<ListItemIcon>
						<PersonIcon sx={{ color: '#fff' }} />
					</ListItemIcon>
					<ListItemText primary='Clientes' />
				</ListItem>
				<ListItem button component='a' href='/admin/profile-page'>
					<ListItemIcon>
						<ApartmentIcon sx={{ color: '#fff' }} />
					</ListItemIcon>
					<ListItemText primary='Empresas' />
				</ListItem>
				<ListItem button component='a' href='/admin/invoices'>
					<ListItemIcon>
						<ReceiptIcon sx={{ color: '#fff' }} />
					</ListItemIcon>
					<ListItemText primary='Facturas' />
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
