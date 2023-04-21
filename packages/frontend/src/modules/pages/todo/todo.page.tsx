import React, { FC, useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Switch, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useGetTodoById, usePatchTodo } from '../../queries';
import { APP_KEYS } from '../../common/consts';
import { FLEXBOX, MARGINS, MEASURES } from '../../theme';
import {
  StyledContainerBox,
  StyledBox,
  StyledTypography,
  StyledDescriptionBox,
  StyledHeader,
  StyledButtonText
} from './todo.styled';
import { LoadingComponent } from '../../common/components/loading';

const TodoPage: FC = () => {
  const { id } = useParams();

  const { mutateAsync: updateTodo } = usePatchTodo();

  const { data: todo, isLoading, refetch } = useGetTodoById(id!);

  const [isPublic, setIsPublic] = useState(todo?.isPublic || false);

  const handleChangeIsPublic = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsPublic(event.target.checked);

      if (!todo) {
        return;
      }

      await updateTodo({
        id,
        title: todo.title,
        description: todo.description,
        isCompleted: todo.isCompleted,
        isPublic: event.target.checked
      });

      await refetch();
    },
    [todo, id]
  );

  const [isCompleted, setIsCompleted] = useState(todo?.isCompleted || false);

  const handleChangeIsCompleted = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsCompleted(event.target.checked);

      if (!todo) {
        return;
      }

      await updateTodo({
        id,
        title: todo.title,
        description: todo.description,
        isPublic: todo.isPublic,
        isCompleted: event.target.checked
      });

      await refetch();
    },
    [todo, id]
  );

  useEffect(() => {
    if (todo) {
      setIsPublic(todo.isPublic);
      setIsCompleted(todo.isCompleted);
    }
  }, [todo?.isCompleted, todo?.isPublic]);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <StyledContainerBox>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <StyledHeader>{todo?.title}</StyledHeader>
          <StyledDescriptionBox>
            <StyledTypography>Description</StyledTypography>
            <Typography variant="body1" gutterBottom>
              {todo?.description}
            </Typography>
          </StyledDescriptionBox>

          <StyledBox>
            <StyledTypography>Complete</StyledTypography>
            <Switch
              checked={isCompleted}
              onChange={handleChangeIsCompleted}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </StyledBox>

          <StyledBox>
            <StyledTypography>Private</StyledTypography>
            <Switch
              checked={isPublic}
              onChange={handleChangeIsPublic}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </StyledBox>

          <Button
            component={Link}
            to={APP_KEYS.ROUTER_KEYS.TODOS}
            variant="contained"
            color="primary"
            sx={{
              display: FLEXBOX.flex,
              justifyContent: FLEXBOX.justifyContentCenter,
              alignItems: FLEXBOX.alignItemsCenter,
              width: MEASURES.width150px,
              margin: MARGINS.marginCentering
            }}
          >
            <ArrowBackIcon />
            <StyledButtonText>Back</StyledButtonText>
          </Button>
        </>
      )}
    </StyledContainerBox>
  );
};

export default TodoPage;
