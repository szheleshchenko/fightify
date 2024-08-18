import {Expose} from 'class-transformer';

export class ApiError {
  @Expose({name: 'status_code'})
  public statusCode!: string;

  @Expose()
  public errors!: Array<{property: string; message: string}>;

  constructor(data: Partial<ApiError> = {}) {
    Object.assign(this, data);
  }
}
