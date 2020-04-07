import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerformerViewPage } from './performer-view.page';

describe('PerformerViewPage', () => {
  let component: PerformerViewPage;
  let fixture: ComponentFixture<PerformerViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformerViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerformerViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
