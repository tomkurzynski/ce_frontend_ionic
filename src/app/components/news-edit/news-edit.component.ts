import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss'],
})
export class NewsEditComponent implements OnInit, OnDestroy {

  newsItem: any = {};
  cookieValue = '';
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private newsService: NewsService,
              private cookieService: CookieService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.cookieValue = this.cookieService.get('festival-id');
      if(id) {
        this.newsService.getNewsItemById(id).subscribe((newsItem: any) => {
          if(newsItem) {
            this.newsItem = newsItem;
            this.newsItem.href = newsItem._links.self.href;
          } else {
            console.log(`News item with id '${id}' not found, returning to news list`);
            this.gotoNewsList;
          }
        })
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoNewsList() {
    this.router.navigate(['/tabs/tab1/festivals/{{ cookieValue }}/news']);
  }

  save() {
    this.newsService.updateNewsItem(this.newsItem).subscribe(result => {
      this.gotoNewsList();
    }, error => console.error(error));
  }

  // remove(href) {
  //   this.newsService.remove(href).subscribe(result => {
  //     this.gotoNewsList();
  //   }, error => console.error(error));
  // }

}
