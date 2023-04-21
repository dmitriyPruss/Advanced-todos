import React, { FC, useCallback } from 'react';
import Carousel from 'react-material-ui-carousel';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { ActionsPanelComponent } from '../actions-panel';
import { IRows } from '../../types';
import {
  StyledTodoTabletContainer,
  StyledTodoTabletItem,
  StyledTodoTabletActionsBox
} from './todos-for-tablet.styled';

export const TodosForTabletComponent: FC<IRows> = ({
  isTablet,
  isMobile,
  rows,
  mutateTodoQueryKey,
  setPage,
  page
}: IRows) => {
  const handleBackButtonClick = useCallback(
    (next: number) => {
      if (next === 0 && page !== 0) {
        setPage(page - 1);
      }
    },
    [page, setPage]
  );

  const handleNextButtonClick = useCallback(
    (item: number) => {
      if (item === 4) {
        setPage(page + 1);
      }
    },
    [page, setPage]
  );

  return (
    <Carousel
      height={300}
      navButtonsAlwaysVisible
      NextIcon={<ArrowCircleRightIcon />}
      PrevIcon={<ArrowCircleLeftIcon />}
      animation="slide"
      next={(next, active) => {
        handleNextButtonClick(active!);
      }}
      prev={(prev, active) => {
        handleBackButtonClick(active!);
      }}
    >
      {rows.map((row) => (
        <StyledTodoTabletContainer key={row.id}>
          <StyledTodoTabletItem>
            <h2>{row.title}</h2>
            <p>{row.description}</p>
            <StyledTodoTabletActionsBox>
              <ActionsPanelComponent
                id={row.id!}
                isCompleted={row.isCompleted}
                isTablet={isTablet}
                isMobile={isMobile}
                todo={row}
                mutateTodoQueryKey={mutateTodoQueryKey}
              />
            </StyledTodoTabletActionsBox>
          </StyledTodoTabletItem>
        </StyledTodoTabletContainer>
      ))}
    </Carousel>
  );
};
