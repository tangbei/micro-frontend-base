import { makeAutoObservable } from 'mobx';

type IDefaultLayoutObj = {
  collapse: boolean;
};

class UseLayoutStore {

  defaultLayoutObj: IDefaultLayoutObj = {
    collapse: false
  };

  constructor() {
    makeAutoObservable(this);
  }

  onChangeCollapse = (collapse: boolean) => {
    this.defaultLayoutObj.collapse = collapse;
  };
};

export default UseLayoutStore;