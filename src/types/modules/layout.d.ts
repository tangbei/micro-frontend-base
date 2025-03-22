export type IMenuType = {
  url: string,
  label: string,
  meta?: object,
  key: string,
  children?: IMenuType[],
};

export type IMenuListType = IMenuListType[];