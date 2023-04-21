import React, { FC } from 'react';
import { ActionsPanelComponent } from '../actions-panel';
import { ITableTodoRow } from '../../types';
import {
  StyledTabletTableRow,
  StyledTabletTableCell,
  StyledTabletActionsTableCell,
  StyledTabletTableCellBox
} from './todo-table-row.styled';
import { COLORS } from '../../../theme';

export const TodoTableRowComponent: FC<ITableTodoRow> = ({
  isTablet,
  isMobile,
  row,
  mutateTodoQueryKey
}: ITableTodoRow) => {
  const { id, isCompleted, ...rowWithoutId } = row;

  const { title, description } = rowWithoutId;

  return (
    <StyledTabletTableRow
      sx={{
        '&:hover': { bgcolor: COLORS.lightblueGray }
      }}
    >
      {[title, description].map((value: string) => (
        <StyledTabletTableCell key={value}>
          <StyledTabletTableCellBox>{value}</StyledTabletTableCellBox>
        </StyledTabletTableCell>
      ))}
      <StyledTabletActionsTableCell>
        <ActionsPanelComponent
          id={row.id!}
          isCompleted={row.isCompleted}
          isTablet={isTablet}
          isMobile={isMobile}
          todo={row}
          mutateTodoQueryKey={mutateTodoQueryKey}
        />
      </StyledTabletActionsTableCell>
    </StyledTabletTableRow>
  );
};
