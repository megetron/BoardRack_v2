import React from 'react';
import Link from 'next/link';
import { Drawer } from 'antd';
import styled from 'styled-components';

import navDrawerLinks from '../../constants/navDrawerLinks';

const Li = styled.li`
  display: block;
  font-size: 1rem;
  padding: 1rem 0;
`;

const isAuthenticated = false;
const navItems = navDrawerLinks.filter(
  navitem => navitem.protected === isAuthenticated
);

const DrawerMenu = ({ isDrawer, handleDrawer }) => {
  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={() => handleDrawer(false)}
      visible={isDrawer}
    >
      <ul>
        {navItems.map((navItem, index) => {
          return (
            <Li key={index}>
              <Link href={navItem.href}>
                <a>
                  {navItem.icon} {navItem.title}
                </a>
              </Link>
            </Li>
          );
        })}
      </ul>
    </Drawer>
  );
};

export default DrawerMenu;