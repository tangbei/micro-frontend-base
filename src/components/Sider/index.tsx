import React, { Children, useEffect, useState } from "react";
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useStore } from "@/store/useStoreContext";
import menuJson from '@/mock/menu.json';
import style from './index.scss';

type MenuItem = Required<MenuProps>['items'][number];

const Sider = React.memo(() => {
  const [menuList, setMenuList] = useState<MenuItem[]>([]);
  const { useLayoutStore: { defaultLayoutObj: { collapse } } } = useStore();

  console.log('sider-collapse-->', collapse);

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  const queryMenus = () => {
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

  const onInit = async () => {
    const menu = await queryMenus() as any;
    const menuCopy = menu.map((item: any) => {
      return {
        key: item.path,
        label: item.meta.title,
        url: item.path,
        children: item.children?.length ? item.children.map((child: any) => {
          return {
            key: child.path,
            label: child.meta.title,
            url: child.path,
          };
        }) : null,
      };
    });
    setMenuList(menuCopy);
    console.log('menu', menuCopy);

  };

  useEffect(() => {
    onInit();
  }, []);

  return (
    <Layout.Sider theme="light" className={style.sider}>
      <div className={style.siderHeader}>TANG BEI</div>
      <div className={style.siderMenu}>
        <Menu
          onClick={onClick}
          defaultSelectedKeys={['/home']}
          mode="inline"
          items={menuList}
        />
      </div>
    </Layout.Sider>
  );
});

export default Sider;