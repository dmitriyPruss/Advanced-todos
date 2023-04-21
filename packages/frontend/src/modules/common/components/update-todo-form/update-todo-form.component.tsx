import React, { FC } from 'react';
import { Button, TextField, DialogContent, DialogTitle } from '@mui/material';
import { useFormik } from 'formik';
import { usePatchTodo } from '../../../queries/todo.queries';
import { TODO_VALID_SCHEMA } from '../../../schemas';
import { StyledUpdateTodoFormContainer } from './update-todo-form.styled';
import { ITodoUpdateFormValues } from '../../types';

export const UpdateTodoFormComponent: FC<ITodoUpdateFormValues> = ({
  valuesForUpdating,
  closeHandler
}: ITodoUpdateFormValues) => {
  const { mutateAsync: updateTodo } = usePatchTodo();

  const { id, title, description, isCompleted, isPublic } = valuesForUpdating;

  const formik = useFormik({
    initialValues: { title, description },
    validationSchema: TODO_VALID_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      await updateTodo({ id, ...values, isPublic, isCompleted });

      resetForm();

      closeHandler();
    }
  });

  return (
    <>
      <DialogTitle>
        <p>Update new todo</p>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <StyledUpdateTodoFormContainer>
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
          </StyledUpdateTodoFormContainer>
        </form>
      </DialogContent>
    </>
  );
};
