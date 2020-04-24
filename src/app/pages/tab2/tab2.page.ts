import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  user: User;
  sub: Subscription;
  cookieValue = '';

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService) {
      
     }

  // ngOnInit() {
  //   this.sub = this.route.params.subscribe(params => {
  //     this.user = new User();

  //     //TO BE CHANGED !!!!!!!
  //     //const id = params['id'];
  //     const id = '1';

  //     //TO BE CHANGED - END !!!!!!
  //     this.userService.getUserById(id).subscribe(data => {
  //       this.user = data;
  //     });
  //   });
  //}

  ngOnInit() {
    this.user = new User();
    this.cookieValue = this.cookieService.get('user-id');
    this.userService.getUserById(this.cookieValue).subscribe(data => {
      this.user = data;
    });
  }

  remove(id: string) {
    this.userService.deleteUser(id).subscribe(result => this.gotoLoginPage());
  }
  gotoLoginPage() {
    this.router.navigate(['/login']);
  }
}
