import {BaseEntity} from '@core/api-client';
import {Expose} from 'class-transformer';

export class News extends BaseEntity<number> {
  @Expose()
  public title!: string;

  @Expose()
  public content!: string;

  @Expose({name: 'created_at'})
  public createdAt!: Date;

  @Expose({name: 'updated_at'})
  public updatedAt!: Date | null;

  @Expose()
  public author!: string;

  @Expose()
  public category?: string;

  @Expose()
  public tags!: Array<string>;

  @Expose({name: 'image_url'})
  public imageUrl!: string;

  @Expose({name: 'video_url'})
  public videoUrl?: string;

  @Expose()
  public source?: string;

  @Expose({name: 'views_count'})
  public viewsCount!: number;

  @Expose()
  public status?: string;

  constructor(news: Partial<News> = {}) {
    super(news);

    Object.assign(this, news);
  }
}
