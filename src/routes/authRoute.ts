import { useLocation, Navigate } from 'react-router-dom';
import menuJson from '@/mock/menu.json';

const AuthRouter = (props: { children: any }) => {
  const { pathname } = useLocation();
  console.log('AuthRouter', props.children, ' ----', pathname);

  const getMenuJson = () => {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(menuJson?.data);
        }, 1000);
      } catch (error) {
        reject([]);
      }
    });
  };

  // try {
  //   const menu = getMenuJson();
  //   console.log('menu', menu);
  // } catch (error) { }
  return props.children;
};

export default AuthRouter;