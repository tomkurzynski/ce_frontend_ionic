import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodvendorViewPage } from './foodvendor-view.page';

describe('FoodvendorViewPage', () => {
  let component: FoodvendorViewPage;
  let fixture: ComponentFixture<FoodvendorViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodvendorViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodvendorViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
