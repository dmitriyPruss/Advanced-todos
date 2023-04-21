import { ReactNode, MouseEvent } from 'react';
import { ITodo } from './todo.types';

export interface ITodoCreateFormValues {
  title: string;
  description: string;
  isCompleted: boolean;
  isPublic: boolean;
}

export interface ITableTodoBodyRow extends ITodoCreateFormValues {
  id?: string;
}

export interface ITabletMobile {
  isTablet: boolean;
  isMobile: boolean;
}

export interface ITableTodoRow extends ITabletMobile {
  row: ITableTodoBodyRow;
  mutateTodoQueryKey: () => Promise<void>;
}

export interface IRows extends ITabletMobile {
  rows: ITodo[];
  mutateTodoQueryKey: () => Promise<void>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize?: number;
  search?: string;
  navigationValue?: string;
  mutatedQueryKey?: string;
}

export interface IRowsDesktop extends ITabletMobile {
  rows: ITodo[];
  page: number;
  pageSize: number;
  handleChangePage: (e: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  mutateTodoQueryKey: () => Promise<void>;
  count: number;
}

export interface ITodoFormValues extends ITabletMobile {
  todo?: ITodo;
  onDataSaved: () => Promise<void>;
}

export interface IActionsPanelComponent extends ITabletMobile {
  id: string;
  isCompleted: boolean;
  todo: ITodo;
  mutateTodoQueryKey: () => Promise<void>;
}

export interface ITodoUpdateFormValues {
  valuesForUpdating: ITodo;
  closeHandler(): void;
}

export interface ILayout {
  children: ReactNode;
}

export interface INavigationPanelComponent {
  addEntityHandler(): void;
  isDesktop: boolean;
  isMobile: boolean;
  navigationPanelButtons: string[];
  searchHandler: () => void;
  searchField: React.MutableRefObject<null>;
  setNavigationValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface ITablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange(event: MouseEvent<HTMLButtonElement>, newPage: number): void;
}

export interface ICreateTodoForm {
  closeHandler(): void;
}

export interface IParams {
  page?: number;
  pageSize?: number;
  search?: string;
  navigationValue?: string;
  token?: string;
  mutatedQueryKey?: string;
  isMobile?: boolean;
}
