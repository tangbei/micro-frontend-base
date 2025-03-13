import UseLayoutStore from './layout';

class RootStore {
  useLayoutStore: UseLayoutStore;

  constructor() {
    this.useLayoutStore = new UseLayoutStore();
  }
}

export const rootStore = new RootStore();

const useStore = () => rootStore;

export default useStore;