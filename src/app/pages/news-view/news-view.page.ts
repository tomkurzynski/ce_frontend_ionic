import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/common/news';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.page.html',
  styleUrls: ['./news-view.page.scss'],
})
export class NewsViewPage implements OnInit {

  newsItem: News;
  sub: Subscription;
  selectedPath = '';
  cookieValue = '';

  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private cookieService: CookieService,
              private router: Router) { 
                this.router.events.subscribe((event: RouterEvent) => {
                  this.selectedPath = event.url;
                });
              }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.newsItem = new News();
      this.cookieValue = this.cookieService.get('festival-id');
      const id = params['id'];
      this.newsService.getNewsItemById(id).subscribe(data => {
        this.newsItem = data;
      });
    });
  }

  getFestivalId() {
    try {
      return this.newsItem.festival.id;
    } catch (e) {}
  }

}
