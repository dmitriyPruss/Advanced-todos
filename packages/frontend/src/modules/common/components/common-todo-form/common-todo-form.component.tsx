import React, { FC, useCallback, useEffect, useState } from 'react';
import { Dialog, DialogActions, Slide } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { TransitionProps } from '@mui/material/transitions';
import { CreateTodoFormComponent } from '../create-todo-form';
import { UpdateTodoFormComponent } from '../update-todo-form';
import { mobileWidth, tabletWidth, desktopWidth } from '../../consts';
import { ITodoFormValues } from '../../types';
import { StyledTodoFormContainer, StyledIconButton } from './common-todo-form.styled';

function transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
}

const Transition = React.forwardRef(transition);

export const CommonTodoFormComponent: FC<ITodoFormValues> = ({
  isTablet,
  isMobile,
  todo,
  onDataSaved
}: ITodoFormValues) => {
  const [open, setOpen] = useState<boolean>(true);

  const closeHandler = useCallback(async () => {
    setOpen(false);

    await onDataSaved();
  }, []);

  useEffect(
    () => () => {
      setOpen(false);
    },
    []
  );

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={closeHandler}
      aria-describedby="alert-dialog-slide-description"
    >
      <StyledTodoFormContainer
        width={isMobile ? mobileWidth : isTablet ? tabletWidth : desktopWidth}
      >
        {todo ? (
          <UpdateTodoFormComponent closeHandler={closeHandler} valuesForUpdating={todo} />
        ) : (
          <CreateTodoFormComponent closeHandler={closeHandler} />
        )}
        <DialogActions>
          <StyledIconButton color="error" onClick={closeHandler}>
            <CancelIcon />
          </StyledIconButton>
        </DialogActions>
      </StyledTodoFormContainer>
    </Dialog>
  );
};
