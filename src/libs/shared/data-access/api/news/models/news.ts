export class News {
  public title!: string;
  public image!: string;
  public description!: string;
  public category!: string;

  constructor(news: Partial<News> = {}) {
    Object.assign(this, news);
  }
}
