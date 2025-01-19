export type Column<T> = {
  name: string;
  field: keyof T;
  sortable?: boolean;
} & (
  | {
      sortable: true;
      link: string;
      query: string;
    }
  | {sortable?: false; query?: never}
);
