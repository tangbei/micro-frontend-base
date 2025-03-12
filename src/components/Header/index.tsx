import React from "react";
import { Layout } from 'antd';

import style from './index.scss';

const Header = () => {
  return (
    <Layout.Header className={style.header}>
      <div className={style.content}>
        <div>我是左边</div>
        <div>我是右边</div>
      </div>
    </Layout.Header>
  );
};

export default Header;