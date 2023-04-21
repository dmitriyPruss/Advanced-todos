import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageContainer from '../pages/home';
import TodosPageContainer from '../pages/todos-container';
import NotFoundPage from '../pages/not-found';
import { APP_KEYS } from '../common/consts';
import TodosPage from '../pages/todos/todos.page';
import TodoPage from '../pages/todo/todo.page';
import Login from '../pages/login';
import SignUp from '../pages/signup';
import MyProfile from '../pages/my-profile';

export const MainRouter = () => (
  <Router>
    <Routes>
      <Route path={APP_KEYS.ROUTER_KEYS.ROOT} index element={<HomePageContainer />} />
      <Route path={APP_KEYS.ROUTER_KEYS.LOGIN} element={<Login />} />
      <Route path={APP_KEYS.ROUTER_KEYS.MY_PROFILE} element={<MyProfile />} />
      <Route path={APP_KEYS.ROUTER_KEYS.SIGN_UP} element={<SignUp />} />
      <Route path={APP_KEYS.ROUTER_KEYS.TODOS} element={<TodosPageContainer />}>
        <Route index element={<TodosPage />} />
        <Route path={APP_KEYS.ROUTER_KEYS.ID} element={<TodoPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);
