import React from "react";
import { Layout, Avatar, Tag, Button } from 'antd';
import { UserOutlined, GithubOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { observer } from "mobx-react";
import { useStore } from '@/store/useStoreContext';

import style from './index.scss';
const Header = () => {
  const { useLayoutStore: { defaultLayoutObj: { collapse }, onChangeCollapse } } = useStore(); 

  console.log('collapse -->', collapse);
  return (
    <Layout.Header className={style.header}>
      <div className={style.content}>
        <div>
          <Button onClick={() => onChangeCollapse(!collapse)}>
            {collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
        <div>
          <Tag>
            <a href="https://github.com/tangbei/micro-frontend-base" target="_blank" rel="noopener noreferrer">
              <GithubOutlined />
            </a>
          </Tag>
          <Tag>{process.env.NODE_ENV}</Tag>
          <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;