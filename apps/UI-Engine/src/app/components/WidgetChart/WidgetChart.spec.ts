import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetChart } from './WidgetChart';

describe('WidgetChart', () => {
  let component: WidgetChart;
  let fixture: ComponentFixture<WidgetChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetChart],
    }).compileComponents();

    fixture = TestBed.createComponent(WidgetChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
