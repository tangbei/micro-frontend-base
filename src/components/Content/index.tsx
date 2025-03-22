import React from "react";
import { Layout, Menu } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { useStore } from "@/store/useStoreContext";
import { observer } from "mobx-react";
import style from './index.scss';

const Content = () => {

  return (
    <Layout.Content className={style.content}>
      <Outlet />
    </Layout.Content>
  );
};

export default Content;