import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../common/news';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl = 'http://localhost:9090/api/news';

  constructor(private httpClient: HttpClient,
    private appService: AppService) { }

  //view all
  getNewsList(id: string) {
    return this.httpClient.get<News[]>(this.baseUrl + '/list/' + id);
  }

  //get by id
  getNewsItemById(id: string) {
    return this.httpClient.get<News>(this.baseUrl + '/' + id);
  }

  //add
  addNewsItem(newsItem: News) {
    return this.httpClient.post<News>(this.baseUrl, newsItem, { headers: this.appService.authorizationToken });
  }

  //update
  updateNewsItem(newsItem: News) {
    return this.httpClient.put<News>(this.baseUrl + '/' + newsItem.id, newsItem, { headers: this.appService.authorizationToken });
  }

  //delete
  deleteNewsItem(id: string) {
    return this.httpClient.delete<News>(this.baseUrl + '/' + id, { headers: this.appService.authorizationToken });
  }

  public saveAsForm(newsItem: any) {
    return this.httpClient.post<any>(this.baseUrl, newsItem, { headers: this.appService.authorizationToken });
  }
}
