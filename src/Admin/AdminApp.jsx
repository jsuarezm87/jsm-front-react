import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { Suspense } from 'react';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Outlet, useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { useAuthStore } from '../hooks/useAuthStore';
import { appBar, boxContainer, buttonStyle, firstBox, secondBox } from './AdminAppStyles';



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
		<Box sx={ boxContainer }>
	
			<Sidebar />
			<Box sx={ firstBox }>
				<Box sx={ secondBox }>
					<AppBar { ...appBar }>
						<Toolbar>
							<IconButton 
								{...buttonStyle}
								aria-label='menu'
								sx={{ mr: 2 }}
								onClick={handleBack}
							>
								<ReplyOutlinedIcon /> 
							</IconButton>
							<Typography variant='h6' component='div' sx={{ flexGrow: 1 }} color='grey'>
								{pathName}
							</Typography>
							<IconButton 
								{...buttonStyle}
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



