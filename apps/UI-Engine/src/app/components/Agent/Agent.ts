import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { UiOrchestrator } from '../UiOrchestrator/UiOrchestrator';

@Component({
  selector: 'app-agent',
  imports: [UiOrchestrator],
  templateUrl: './Agent.html',
  styleUrl: './Agent.scss',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Agent {
  airesponse = [{
    type: "text",
    data: {text: 'Op basis van je keukenplannen heb ik dit overzicht gemaakt:'}
  },
  {
    type: "chart",
    data: {title: 'Overzicht van je keukenplannen', dataPoints: 5}
  }]


  newResponse() {
    this.airesponse = [{
      type: "text",
      data: {text: 'Hier is een nieuwe instructie van de AI:'}
    },
    {
      type: "chart",
      data: {title: 'Nieuwe AI Instructie', dataPoints: Math.floor(Math.random() * 10)}
    }]
  }
}
