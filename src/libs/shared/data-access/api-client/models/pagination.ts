import {Expose} from 'class-transformer';

export class PaginationResponse<TEntity> {
  @Expose()
  public data!: Array<TEntity>;

  constructor(pagination: Partial<PaginationResponse<TEntity>> = {}) {
    Object.assign(this, pagination);
  }
}
