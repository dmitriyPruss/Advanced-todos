import React, { FC, useCallback, useRef } from 'react';
import { ListItem } from '@mui/material';
import { ActionsPanelComponent } from '../actions-panel';
import { IRows, ITodo } from '../../types';
import {
  StyledTodoMobileList,
  StyledTodoMobileListItemContainer,
  StyledTodoMobileActionsBox,
  StyledTodoMobileContentBox,
  StyledMobileListBox
} from './todos-for-mobile.styled';
import { useGetAllTodosInfiniteScroll } from '../../../queries';

export const TodosForMobileComponent: FC<IRows> = ({
  isTablet,
  isMobile,
  page,
  pageSize,
  setPage,
  mutateTodoQueryKey,
  search,
  navigationValue,
  mutatedQueryKey
}: IRows) => {
  const { data, fetchNextPage, fetchPreviousPage } = useGetAllTodosInfiniteScroll(
    page,
    pageSize,
    search,
    navigationValue,
    mutatedQueryKey,
    isMobile
  );

  const handleNextScroll = useCallback(async () => {
    const pageCount = data!.pages[0].data.allPagesCount || 0;
    const size = pageSize || 0;

    const pagesQuantity = Math.ceil(pageCount / size);

    const list = document.getElementById('list-id');

    if (pagesQuantity - 1 > page) {
      setPage(page + 1);

      await fetchNextPage();

      if (list) {
        list.scrollTop = 5;
      }
    }
  }, [setPage, page, data, pageSize]);

  const handlePrevScroll = useCallback(async () => {
    if (page > 0) {
      setPage(page - 1);

      await fetchPreviousPage();
    }
  }, [setPage, page]);

  const inputEl = useRef(null);

  const onScroll = async () => {
    const list = document.getElementById('list-id');

    const listScrollTop = list!.scrollTop || 0;
    const listScrollHeight = list!.scrollHeight || 0;
    const listClientHeight = list!.clientHeight || 0;

    if (listScrollTop + listClientHeight >= listScrollHeight) {
      await handleNextScroll();
    }

    if (listScrollTop + listClientHeight <= listClientHeight) {
      await handlePrevScroll();
    }
  };

  const rowsMobile: ITodo[] = data?.pages[0].data.data || [];

  return (
    <StyledTodoMobileList id="list-id" onScroll={onScroll}>
      <StyledMobileListBox>
        {rowsMobile.map((row: ITodo) => (
          <ListItem ref={inputEl} key={row.id}>
            <StyledTodoMobileListItemContainer>
              <StyledTodoMobileContentBox>
                <h2>{row.title}</h2>
                <p>{row.description}</p>
              </StyledTodoMobileContentBox>
              <StyledTodoMobileActionsBox>
                <ActionsPanelComponent
                  id={row.id!}
                  isCompleted={row.isCompleted}
                  isTablet={isTablet}
                  isMobile={isMobile}
                  todo={row}
                  mutateTodoQueryKey={mutateTodoQueryKey}
                />
              </StyledTodoMobileActionsBox>
            </StyledTodoMobileListItemContainer>
          </ListItem>
        ))}
      </StyledMobileListBox>
    </StyledTodoMobileList>
  );
};
