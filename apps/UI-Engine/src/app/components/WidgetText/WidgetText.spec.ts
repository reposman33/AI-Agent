import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetText } from './WidgetText';

describe('WidgetText', () => {
  let component: WidgetText;
  let fixture: ComponentFixture<WidgetText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetText],
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
