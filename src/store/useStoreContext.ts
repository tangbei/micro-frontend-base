import React from "react";
import { rootStore } from './index';

export const rootStoreContext = React.createContext(rootStore);

export const useStore = () => {
  const rootStore = React.useContext(rootStoreContext);
  console.log('rootStore--> ', rootStore);
  if (!rootStore) {
    throw new Error('rootStore error')
  }
  return rootStore;
};