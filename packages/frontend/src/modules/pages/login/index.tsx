import React, { FC } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { APP_KEYS } from '../../common/consts';
import { AUTHORIZATION_VALID_SCHEMA } from '../../schemas';
import { Layout } from '../../common/components/layout';
import { useLoginUser } from '../../queries';
import { LoginBoxContainer, StyledInputContainer, StyledLoginAvatar } from './login.styled';

const Login: FC = () => {
  const navigate = useNavigate();

  const { mutateAsync: login } = useLoginUser();

  const initialValues = { email: '', password: '' };

  const formik = useFormik({
    initialValues,
    validationSchema: AUTHORIZATION_VALID_SCHEMA,
    onSubmit: async (values) => {
      await login(values);

      navigate(APP_KEYS.ROUTER_KEYS.TODOS, { replace: true });
    }
  });

  const goToMainPage = () => {
    navigate(APP_KEYS.ROUTER_KEYS.ROOT, { replace: true });
  };

  return (
    <Layout>
      <LoginBoxContainer>
        <StyledLoginAvatar>
          <LockOutlinedIcon />
        </StyledLoginAvatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{
            mt: 1
          }}
        >
          <StyledInputContainer>
            <TextField
              margin="normal"
              required
              fullWidth
              autoComplete="email"
              autoFocus
              id="email"
              name="email"
              label="Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </StyledInputContainer>
          <StyledInputContainer>
            <TextField
              margin="normal"
              required
              fullWidth
              autoComplete="current-password"
              type="password"
              id="password"
              name="password"
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </StyledInputContainer>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Box display="flex" justifyContent="flex-end">
            <Button color="error" variant="outlined" onClick={goToMainPage}>
              Back
            </Button>
          </Box>
        </Box>
      </LoginBoxContainer>
    </Layout>
  );
};

export default Login;
