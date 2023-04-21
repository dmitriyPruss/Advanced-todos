import React, { FC } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { APP_KEYS } from '../../common/consts';
import { AUTHORIZATION_VALID_SCHEMA } from '../../schemas';
import { useSignUpUser } from '../../queries';
import { Layout } from '../../common/components/layout';
import { SignUpBoxContainer, StyledInputContainer, StyledSignUpAvatar } from './signup.styled';

const SignUp: FC = () => {
  const navigate = useNavigate();

  const { mutateAsync: signUp } = useSignUpUser();

  const initialValues = { email: '', password: '' };

  const formik = useFormik({
    initialValues,
    validationSchema: AUTHORIZATION_VALID_SCHEMA,
    onSubmit: async (values) => {
      await signUp(values);

      navigate(APP_KEYS.ROUTER_KEYS.TODOS, { replace: true });
    }
  });

  const goToMainPage = () => {
    navigate(APP_KEYS.ROUTER_KEYS.ROOT, { replace: true });
  };

  return (
    <Layout>
      <SignUpBoxContainer>
        <StyledSignUpAvatar>
          <LockOutlinedIcon />
        </StyledSignUpAvatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
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
            Sign Up
          </Button>
          <Box display="flex" justifyContent="flex-end">
            <Button color="error" variant="outlined" onClick={goToMainPage}>
              Back
            </Button>
          </Box>
        </Box>
      </SignUpBoxContainer>
    </Layout>
  );
};

export default SignUp;
