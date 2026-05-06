import {WidgetText} from './components/';
import {WidgetChart} from './components/';

export const WIDGET_REGISTRY: Record<string, any> = {
  'text': WidgetText,
  'chart': WidgetChart
};
