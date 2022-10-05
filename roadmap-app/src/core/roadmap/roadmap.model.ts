import { InputActionMeta } from 'react-select';

export enum TableKeys {
  id = 'id',
  title = 'title',
  author = 'author',
  date = 'date',
  rating = 'rating',
  action = 'action',
  isPriority = 'isPriority',
  originIndex = 'originIndex',
}

export interface Table {
  [TableKeys.id]?: string | null;
  [TableKeys.title]: string;
  [TableKeys.author]: string;
  [TableKeys.date]: string;
  [TableKeys.rating]: number | null;
  [TableKeys.isPriority]: boolean;
  [TableKeys.originIndex]: number;
}

export interface AppMeta {
  message: string;
  requestOptions?: RequestInit;
}

export interface Action<T> {
  type: string;
  payload?: T;
  meta?: AppMeta;
}

export interface SortingProps {
  id: number | string;
  isReversed?: boolean;
}

export interface OptionProps {
  value: string;
  label: string;
}

export interface OnSearchProps {
  term: string;
  meta: InputActionMeta;
}
