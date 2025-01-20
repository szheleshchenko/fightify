import {Expose} from 'class-transformer';
import {BaseEntity} from './base-entity';

export class PaginationRequest<T extends BaseEntity = BaseEntity> {
  @Expose()
  public query?: string;

  @Expose()
  public page?: number;

  @Expose({name: 'per_page'})
  public perPage?: number;

  @Expose()
  public all?: boolean;

  @Expose({name: 'order_by'})
  public orderBy?: keyof T;

  @Expose()
  public desc?: boolean;

  constructor(request: Partial<PaginationRequest<T>> = {}) {
    Object.assign(this, request);
  }
}
