import {Expose} from 'class-transformer';

export class Pagination<TEntity> {
  @Expose({name: 'current_page'})
  public currentPage!: number;

  @Expose({name: 'per_page'})
  public perPage!: number;

  @Expose({name: 'last_page'})
  public lastPage!: number;

  @Expose()
  public total!: number;

  @Expose()
  public from!: number;

  @Expose()
  public to!: number;

  @Expose({name: 'order_by'})
  public orderBy?: keyof TEntity;

  @Expose()
  public desc?: boolean;

  constructor(pagination: Partial<Pagination<TEntity>> = {}) {
    Object.assign(this, pagination);
  }
}
