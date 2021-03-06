import { Component } from '@angular/core';
import { News } from 'src/app/common/news';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss'],
})
export class NewsFormComponent{

  newsItem: News;
  cookieValue = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private newsService: NewsService,
              private cookieService: CookieService) {
                this.newsItem = new News();
                this.cookieValue= this.cookieService.get('festival-id');
               }

  onSubmit() {
    const fd = new FormData();

    let dto = JSON.parse(JSON.stringify(this.newsItem));

    //TO BE VERIFIED
    dto.festival = {id: this.cookieValue};
    //fd.append('news', JSON.stringify(dto));

    this.newsService.addNewsItem(dto).subscribe(result => this.gotoNewsList());
  }

  gotoNewsList() {
    this.router.navigate(['/tabs/tab1/festivals/{{cookieValue}}/news']);
  }

}
