import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { APP_KEYS } from '../../consts';
import { StyledAuthorizationContainer } from './authorization.styled';
import { MEASURES } from '../../../theme';

export const AuthorizationComponent = () => (
  <StyledAuthorizationContainer>
    <h2>TODO SERVICE APP</h2>
    <Button
      sx={{ width: MEASURES.width150px }}
      component={Link}
      to={APP_KEYS.ROUTER_KEYS.LOGIN}
      variant="contained"
      color="primary"
    >
      Login
    </Button>
    <Button
      sx={{ width: MEASURES.width150px }}
      component={Link}
      to={APP_KEYS.ROUTER_KEYS.SIGN_UP}
      variant="contained"
      color="secondary"
    >
      Sign up
    </Button>
    <Link to={APP_KEYS.ROUTER_KEYS.SIGN_UP}>Forget Password?</Link>
  </StyledAuthorizationContainer>
);
