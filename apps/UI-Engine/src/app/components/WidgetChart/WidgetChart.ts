import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-widget-chart',
  imports: [],
  templateUrl: './WidgetChart.html',
  styleUrl: './WidgetChart.scss',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetChart {
  @Input() title: string = '';
  @Input() dataPoints: number = 0;
}
