import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useGetUser, useUpdatePassword } from '../../queries';
import { Layout } from '../../common/components/layout';
import { ROUTER_KEYS, STORAGE_KEYS } from '../../common/consts/app-keys.const';
import { CHANGE_PASSWORD_VALID_SCHEMA } from '../../schemas';
import {
  StyledMyProfileContainer,
  StyledCard,
  StyledCardContent,
  StyledPaper,
  StyledFormContainer,
  StyledCardActions,
  StyledInputContainer,
  StyledButtonGroup
} from './index.styled';

const MyProfile: FC = () => {
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN);

  const { data: user, refetch } = useGetUser(token!);

  const { mutateAsync: updatePassword } = useUpdatePassword();

  const navigate = useNavigate();

  const email = user?.email ? user.email : '';

  const initialValues = { email, password: '', newPassword: '' };

  const formik = useFormik({
    initialValues,
    validationSchema: CHANGE_PASSWORD_VALID_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      await updatePassword(values);

      resetForm();

      await refetch();
    }
  });

  const goToMainPage = () => {
    navigate(ROUTER_KEYS.ROOT, { replace: true });
  };

  const logOut = useCallback(() => {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);

    navigate(ROUTER_KEYS.ROOT, { replace: true });
  }, []);

  return (
    <Layout>
      <StyledMyProfileContainer>
        <StyledCard>
          <StyledCardContent>
            <StyledPaper elevation={3}>
              <Typography variant="h4" component="h2">
                My profile
              </Typography>
              <StyledFormContainer onSubmit={formik.handleSubmit}>
                <StyledInputContainer>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
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
                    type="password"
                    id="password"
                    name="password"
                    label="Old Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                  />
                </StyledInputContainer>
                <StyledInputContainer>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    label="New Password"
                    value={formik.values.newPassword}
                    onChange={formik.handleChange}
                    error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                    helperText={formik.touched.newPassword && formik.errors.newPassword}
                  />
                </StyledInputContainer>

                <StyledButtonGroup>
                  <Button type="submit" color="success" variant="contained">
                    Submit
                  </Button>
                  <Button color="secondary" variant="contained" onClick={goToMainPage}>
                    Back
                  </Button>
                </StyledButtonGroup>
              </StyledFormContainer>
            </StyledPaper>
          </StyledCardContent>

          <StyledCardActions>
            <Button variant="contained" color="error" onClick={logOut}>
              LOGOUT
            </Button>
          </StyledCardActions>
        </StyledCard>
      </StyledMyProfileContainer>
    </Layout>
  );
};

export default MyProfile;
