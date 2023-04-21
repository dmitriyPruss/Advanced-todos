import React, { FC } from 'react';
import { LayoutContainer } from './layout-container.component';
import { ILayout } from '../../types';

export const Layout: FC<ILayout> = ({ children }: ILayout) => (
  <LayoutContainer>{children}</LayoutContainer>
);
