import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiOrchestrator } from './UiOrchestrator';

describe('UiOrchestrator', () => {
  let component: UiOrchestrator;
  let fixture: ComponentFixture<UiOrchestrator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiOrchestrator],
    }).compileComponents();

    fixture = TestBed.createComponent(UiOrchestrator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
