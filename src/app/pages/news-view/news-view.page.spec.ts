import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsViewPage } from './news-view.page';

describe('NewsViewPage', () => {
  let component: NewsViewPage;
  let fixture: ComponentFixture<NewsViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
