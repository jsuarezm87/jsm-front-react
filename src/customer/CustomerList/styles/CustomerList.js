import { styled } from "@mui/system";

const UserCard = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'box-shadow 0.3s',
  '&:hover': {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  },
  backgroundColor: 'lightgray',
  width: '300px',
}));

const FieldName = styled('span')(({ theme }) => ({
  fontWeight: 'bold',
  marginRight: theme.spacing(1),
}));

const Header = styled('div')(({ theme }) => ({
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

export { UserCard, FieldName, Header, GridContainer };
