import React from 'react';
import { logout } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const LogoutButton = ({ setAuthenticated }) => {
  const navigate = useNavigate();
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    navigate('/');
    window.location.reload();
  };

  return (
    <Button
      color="primary"
      size="medium"
      target="_blank"
      variant="contained"
      onClick={onLogout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;