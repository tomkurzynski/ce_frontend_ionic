import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodvendorEditComponent } from './foodvendor-edit.component';

describe('FoodvendorEditComponent', () => {
  let component: FoodvendorEditComponent;
  let fixture: ComponentFixture<FoodvendorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodvendorEditComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodvendorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
