import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-widget-text',
  imports: [],
  templateUrl: './WidgetText.html',
  styleUrl: './WidgetText.scss',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetText {
  @Input() text: string = ''
}
