import React, { FC } from 'react';
import { Button, TextField, DialogContent, DialogTitle } from '@mui/material';
import { useFormik } from 'formik';
import { usePostTodo } from '../../../queries/todo.queries';
import { StyledCreateTodoFormContainer } from './create-todo-form.styled';
import { TODO_VALID_SCHEMA } from '../../../schemas';
import { ITodoCreateFormValues, ICreateTodoForm } from '../../types';

export const CreateTodoFormComponent: FC<ICreateTodoForm> = ({ closeHandler }: ICreateTodoForm) => {
  const { mutateAsync: createTodo } = usePostTodo();

  const initialValues: ITodoCreateFormValues = {
    title: '',
    description: '',
    isPublic: false,
    isCompleted: false
  };

  const formik = useFormik({
    initialValues,
    validationSchema: TODO_VALID_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      await createTodo(values);

      resetForm();

      closeHandler();
    }
  });

  return (
    <>
      <DialogTitle>
        <p>Create new todo</p>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <StyledCreateTodoFormContainer>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Send
            </Button>
          </StyledCreateTodoFormContainer>
        </form>
      </DialogContent>
    </>
  );
};
