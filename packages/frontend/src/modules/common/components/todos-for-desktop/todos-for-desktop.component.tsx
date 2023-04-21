import React, { FC } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { TodoTableRowComponent } from '../todo-table-row';
import { IRowsDesktop } from '../../types';
import { headingTodoTableNames } from '../../consts';
import {
  StyledDesktopTableContainer,
  StyledDesktopTableCell,
  StyledDesktopTableRow,
  StyledDesktopTableFooter,
  StyledAutoStoriesIcon,
  StyledTablePagination
} from './todos-for-desktop.styled';
import { MEASURES, SPACES } from '../../../theme';
import { TablePaginationActions } from '../table-pagination-actions';

export const TodosForDesktopComponent: FC<IRowsDesktop> = ({
  isTablet,
  isMobile,
  rows,
  page,
  pageSize,
  handleChangePage,
  handleChangeRowsPerPage,
  mutateTodoQueryKey,
  count
}: IRowsDesktop) => (
  <Box display="flex" flexDirection="column">
    <StyledDesktopTableContainer>
      <Table stickyHeader aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {headingTodoTableNames.map((name: string) => (
              <StyledDesktopTableCell key={name}>{name}</StyledDesktopTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ width: MEASURES.fullWidth }}>
          {rows.map((row) => (
            <TodoTableRowComponent
              key={row.id}
              row={row}
              mutateTodoQueryKey={mutateTodoQueryKey}
              isTablet={isTablet}
              isMobile={isMobile}
            />
          ))}
        </TableBody>
      </Table>
    </StyledDesktopTableContainer>

    <TableContainer component={Box} sx={{ height: MEASURES.height72px, mt: SPACES.m }}>
      <Table aria-label="collapsible table">
        <StyledDesktopTableFooter>
          <StyledDesktopTableRow>
            <TableCell>
              <StyledAutoStoriesIcon />
            </TableCell>
            <StyledTablePagination
              colSpan={3}
              count={count}
              rowsPerPage={pageSize}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[5, 10, 25]}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </StyledDesktopTableRow>
        </StyledDesktopTableFooter>
      </Table>
    </TableContainer>
  </Box>
);
