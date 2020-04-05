import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FestivalDashboardPage } from './festival-dashboard.page';

describe('FestivalDashboardPage', () => {
  let component: FestivalDashboardPage;
  let fixture: ComponentFixture<FestivalDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivalDashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FestivalDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
