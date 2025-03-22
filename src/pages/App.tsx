import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@/assets/styles/index.scss';
import { observer } from 'mobx-react';
import { rootStore } from '@/store';
import { rootStoreContext } from '@/store/useStoreContext';
import Router from '@/routes';
import AuthRouter from '@/routes/authRoute';

const App = () => {

  return (
    /** 启用严格模式 */
    <React.StrictMode>
      { /** history路由模式 */ }
      <BrowserRouter>
        <AuthRouter>
          <Router />
        </AuthRouter>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default observer(App);