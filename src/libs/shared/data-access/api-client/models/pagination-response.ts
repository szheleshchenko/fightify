import {Expose} from 'class-transformer';
import {Pagination} from './pagination';

export class PaginationResponse<TEntity> {
  @Expose()
  public data!: Array<TEntity>;

  @Expose()
  public pagination!: Pagination;

  constructor(pagination: Partial<PaginationResponse<TEntity>> = {}) {
    Object.assign(this, pagination);
  }
}
