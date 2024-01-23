import {Injectable, inject} from '@angular/core';
import {ApiService} from '@libs/shared/data-access/api-client';
import {injectQuery} from '@ngneat/query';

@Injectable({providedIn: 'root'})
export class NewsService {
  private httpClient = inject(ApiService);
  private query = injectQuery();

  public search() {
    return this.query({
      queryKey: ['news'] as const,
      queryFn: () => this.httpClient.get('/news'),
    });
  }
}
