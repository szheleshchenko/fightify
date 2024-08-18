import {Expose} from 'class-transformer';

export class BaseEntity<TID = number> {
  @Expose()
  public id!: TID;

  constructor(baseModel: Partial<BaseEntity<TID>> = {}) {
    Object.assign(this, baseModel);
  }
}
