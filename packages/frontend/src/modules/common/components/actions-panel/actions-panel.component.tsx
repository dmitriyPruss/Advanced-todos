import React, { FC, useCallback, useEffect, useState } from 'react';
import { Switch, Tooltip } from '@mui/material';
import { useModal } from 'mui-modal-provider';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { useDeleteTodo, usePatchTodo } from '../../../queries/todo.queries';
import { IActionsPanelComponent } from '../../types';
import { COLORS } from '../../../theme';
import { CommonTodoFormComponent } from '../common-todo-form';
import { StyledActionsPanelBox } from './actions-panel.styled';

export const ActionsPanelComponent: FC<IActionsPanelComponent> = ({
  id,
  isCompleted,
  isTablet,
  isMobile,
  todo,
  mutateTodoQueryKey
}: IActionsPanelComponent) => {
  const { mutateAsync: updateTodo } = usePatchTodo();
  const { mutateAsync: deleteTodo } = useDeleteTodo();

  const deleteTodoHandler = useCallback(async () => {
    await deleteTodo(id);

    await mutateTodoQueryKey();
  }, [id]);

  const { showModal } = useModal();

  const editFormHandler = useCallback(() => {
    showModal(CommonTodoFormComponent, {
      isTablet,
      isMobile,
      todo,
      onDataSaved: async () => {
        await mutateTodoQueryKey();
      }
    });
  }, [isTablet, isMobile, todo]);

  const [isDone, setIsDone] = useState(isCompleted);

  const handleChangeIsDone = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsDone(event.target.checked);

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

      await mutateTodoQueryKey();
    },
    [todo, id]
  );

  const navigate = useNavigate();

  const viewTodo = useCallback(() => {
    navigate(`${id}`, { replace: true });
  }, [id]);

  useEffect(() => {
    if (todo) {
      setIsDone(todo.isCompleted);
    }
  }, [todo?.isCompleted]);

  return (
    <StyledActionsPanelBox>
      <Tooltip title="View" arrow>
        <VisibilityIcon sx={{ color: COLORS.blue }} onClick={viewTodo} />
      </Tooltip>
      <Tooltip title="Edit" arrow>
        <EditIcon sx={{ color: COLORS.brown }} onClick={editFormHandler} />
      </Tooltip>
      <Tooltip title="Delete" arrow>
        <DeleteIcon sx={{ color: COLORS.red }} onClick={deleteTodoHandler} />
      </Tooltip>
      <Tooltip title="In progress / Completed" arrow>
        <Switch
          checked={isDone}
          onChange={handleChangeIsDone}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </Tooltip>
    </StyledActionsPanelBox>
  );
};
