import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { Suspense } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogoutIcon from '@mui/icons-material/Logout';
import { Outlet, useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { useAuthStore } from '../hooks/useAuthStore';


export const AdminApp = ({ ...rest }) => {	

	const pathName = window.location.pathname;
	const navigate = useNavigate();
	const {startLogout} = useAuthStore();

	const handleLogout = () => {
		startLogout();
	}

	const handleBack = () => {
		navigate(-1);
	}
	

	return (
		<Box
			sx={{
				display: 'flex',
				height: '100vh',
				overflow: 'hidden',
			}}
		>
			<Sidebar />
			<Box sx={{ width: '100%' }}>
				<Box sx={{ flexGrow: 1, width: '100%' }}>
					<AppBar position='static' sx={{ backgroundColor: '#fff', color: '#000' }}>
						<Toolbar>
							<IconButton 
								size='large' 
								edge='start' 
								color='inherit' 
								aria-label='menu' 
								sx={{ mr: 2 }}
								onClick={handleBack}
							>
								<ArrowBackIcon /> 
							</IconButton>
							<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
								{pathName}
							</Typography>
							<IconButton 
								size='large' 
								edge='start' 
								color='primary' 
								aria-label='menu' 
								sx={{ mr: 2 }}
								onClick={handleLogout}
							>
								<LogoutIcon />
							</IconButton>
						</Toolbar>
					</AppBar>
				</Box>
				<Suspense fallback={<div>Loader</div>}>
					<Outlet />
				</Suspense>
			</Box>
		</Box>
	)
}



