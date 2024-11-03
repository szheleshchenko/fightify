export type Column<T> = {
  name: string;
  field: keyof T | 'actions';
  sortable?: boolean;
};
