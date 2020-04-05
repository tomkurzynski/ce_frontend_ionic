import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerformersPage } from './performers.page';

describe('PerformersPage', () => {
  let component: PerformersPage;
  let fixture: ComponentFixture<PerformersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerformersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
