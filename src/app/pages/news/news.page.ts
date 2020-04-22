import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/common/news';
import { NewsService } from 'src/app/services/news.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  news: News[];
  cookieValue = '';

  constructor(private newsService: NewsService,
              private cookieService: CookieService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(val => {
      this.cookieValue = this.cookieService.get('festival-id');
      this.newsService.getNewsList(this.cookieValue).subscribe(data => {
        this.news = data;
      });
      
    });
  }

  onClickFunction(id: string) {
    this.newsService.deleteNewsItem(id).subscribe(() => { this.refreshList(); });
  }

  refreshList() {
    this.newsService.getNewsList(this.cookieValue).subscribe(data => {
      this.news = data;
    });
  }

}
