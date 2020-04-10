import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../common/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl = 'http://localhost:9090/api/news';

  constructor(private httpClient: HttpClient) { }

  //view all
  getNewsList() {
    return this.httpClient.get<News[]>(this.baseUrl);
  }

  //get by id
  getNewsItemById(id: string) {
    return this.httpClient.get<News>(this.baseUrl + '/' + id);
  }

  //add
  addNewsItem(newsItem: News) {
    return this.httpClient.post<News>(this.baseUrl, newsItem);
  }

  //update
  updateNewsItem(newsItem: News) {
    return this.httpClient.put<News>(this.baseUrl + '/' + newsItem.id, newsItem);
  }

  //delete
  deleteNewsItem(id: string) {
    return this.httpClient.delete<News>(this.baseUrl + '/' + id);
  }

  public saveAsForm(newsItem: any) {
    return this.httpClient.post<any>(this.baseUrl, newsItem);
  }
}
