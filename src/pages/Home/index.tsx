import React, { Suspense } from 'react';
import { Layout } from 'antd';
import Header from '@/components/Header';
import Sider from '@/components/Sider';
import Content from '@/components/Content';
import style from './index.scss';

const Loading = () => {
  return <h2>Loading...</h2>;
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  // color: '#fff',
  // backgroundColor: '#0958d9',
};

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Layout className={style.layout}>
        <Sider />
        <Layout>
          <Header />
          <Content />
        </Layout>
      </Layout>
    </Suspense>
  );
};



export default Home;