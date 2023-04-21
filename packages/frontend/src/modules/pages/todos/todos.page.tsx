import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import { useModal } from 'mui-modal-provider';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CommonTodoFormComponent } from '../../common/components/common-todo-form';
import { TodosForMobileComponent } from '../../common/components/todos-for-mobile/todos-for-mobile.component';
import { TodosForTabletComponent } from '../../common/components/todos-for-tablet';
import { TodosForDesktopComponent } from '../../common/components/todos-for-desktop';
import { NavigationPanelComponent } from '../../common/components/navigation-panel';
import { useGetAllTodos } from '../../queries/todo.queries';
import { navigationPanelButtons } from '../../common/consts';
import { StyledHeaderContainer } from './todos.styled';
import { LoadingComponent } from '../../common/components/loading';
import { ROUTER_KEYS } from '../../common/consts/app-keys.const';

const TodosContent: FC = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [search, setSearch] = useState('');

  const [navigationValue, setNavigationValue] = useState('All');
  const [mutatedQueryKey, setMutatedQueryKey] = useState('');

  const searchField = useRef(null);

  const { data, isLoading, refetch } = useGetAllTodos(
    page,
    pageSize,
    search,
    navigationValue,
    mutatedQueryKey
  );

  const rows = data ? data.todos : [];
  const count = data ? data.count : 5;

  const handleChangePage = (e: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPageSize(parseInt(e.target.value, 10));
      setPage(0);
    },
    []
  );

  const mutateTodoQueryKey = async () => {
    const randomValue = Math.round(Math.random() * 1000000);
    setMutatedQueryKey(`Mutated${randomValue}`);

    await refetch();
  };

  const searchHandler = () => {
    if (searchField.current) {
      // @ts-ignore
      const value = searchField.current.value ? searchField.current.value : '';

      setSearch(value);
      refetch();
    }
  };

  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.between('tablet', 'desktop'));
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));
  const isDesktop = !isMobile && !isTablet;

  const { showModal } = useModal();

  const addFormHandler = useCallback(() => {
    showModal(CommonTodoFormComponent, {
      isTablet,
      isMobile,
      onDataSaved: async () => {
        await refetch();
      }
    });
  }, [isTablet, isMobile]);

  const navigate = useNavigate();

  const goToMyProfile = useCallback(() => {
    navigate(ROUTER_KEYS.MY_PROFILE, { replace: true });
  }, []);

  useEffect(() => {
    refetch();
  }, []);

  return isLoading ? (
    <LoadingComponent />
  ) : (
    <>
      <StyledHeaderContainer>
        <h1>Todos</h1>
        <Button variant="contained" onClick={goToMyProfile}>
          My Profile
        </Button>
      </StyledHeaderContainer>
      <NavigationPanelComponent
        addEntityHandler={addFormHandler}
        isDesktop={isDesktop}
        isMobile={isMobile}
        navigationPanelButtons={navigationPanelButtons}
        searchHandler={searchHandler}
        searchField={searchField}
        setNavigationValue={setNavigationValue}
      />
      {isMobile && (
        <TodosForMobileComponent
          rows={rows}
          isTablet={isTablet}
          isMobile={isMobile}
          mutateTodoQueryKey={mutateTodoQueryKey}
          setPage={setPage}
          page={page}
          pageSize={pageSize}
          search={search}
          navigationValue={navigationValue}
          mutatedQueryKey={mutatedQueryKey}
        />
      )}
      {isTablet && (
        <TodosForTabletComponent
          rows={rows}
          isTablet={isTablet}
          isMobile={isMobile}
          mutateTodoQueryKey={mutateTodoQueryKey}
          setPage={setPage}
          page={page}
          pageSize={pageSize}
        />
      )}
      {isDesktop && (
        <TodosForDesktopComponent
          page={page}
          pageSize={pageSize}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          rows={rows}
          isTablet={isTablet}
          isMobile={isMobile}
          mutateTodoQueryKey={mutateTodoQueryKey}
          count={count}
        />
      )}
    </>
  );
};

export default TodosContent;
