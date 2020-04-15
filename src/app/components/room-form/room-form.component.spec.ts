import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomFormComponent } from './room-form.component';

describe('RoomFormComponent', () => {
  let component: RoomFormComponent;
  let fixture: ComponentFixture<RoomFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
