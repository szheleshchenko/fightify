import {Expose} from 'class-transformer';

export class BaseModel {
  @Expose()
  public id!: number;

  constructor(baseModel: Partial<BaseModel> = {}) {
    Object.assign(this, baseModel);
  }
}
