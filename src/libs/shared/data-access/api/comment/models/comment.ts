import {BaseModel} from '@libs/shared/data-access/api-client';
import {Expose} from 'class-transformer';

export class Comment extends BaseModel {
  @Expose()
  public authorName!: string;

  @Expose()
  public date!: string;

  @Expose()
  public content!: string;

  @Expose()
  public avatarUrl!: string;

  constructor(comment: Partial<Comment> = {}) {
    super(comment);

    Object.assign(this, comment);
  }
}
