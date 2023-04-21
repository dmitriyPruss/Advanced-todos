import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from '../../common/components/layout/layout.component';

const TodosPageContainer: FC = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export default TodosPageContainer;
