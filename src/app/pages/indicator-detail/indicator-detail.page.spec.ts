import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndicatorDetailPage } from './indicator-detail.page';

describe('IndicatorDetailPage', () => {
  let component: IndicatorDetailPage;
  let fixture: ComponentFixture<IndicatorDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndicatorDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
