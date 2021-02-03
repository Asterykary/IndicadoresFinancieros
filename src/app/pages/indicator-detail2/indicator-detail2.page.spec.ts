import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndicatorDetail2Page } from './indicator-detail2.page';

describe('IndicatorDetail2Page', () => {
  let component: IndicatorDetail2Page;
  let fixture: ComponentFixture<IndicatorDetail2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorDetail2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndicatorDetail2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
