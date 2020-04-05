import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodvendorsPage } from './foodvendors.page';

describe('FoodvendorsPage', () => {
  let component: FoodvendorsPage;
  let fixture: ComponentFixture<FoodvendorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodvendorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodvendorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
