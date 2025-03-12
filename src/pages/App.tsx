import React, { Suspense } from 'react';
import { Layout } from 'antd';
import '@/assets/styles/index.scss';
import Header from '@/components/Header';
import Sider from '@/components/Sider';

import style from './index.module.scss';

const { Content } = Layout;

const Loading = () => {
  return <h2>Loading...</h2>;
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <Header />
        <Layout>
          <Sider />
          <Content style={contentStyle}>Content</Content>
        </Layout>
      </Layout>
    </Suspense>
  );
};

export default App;