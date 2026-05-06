import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { WIDGET_REGISTRY } from '../../component-registry';

@Component({
  selector: 'app-ui-orchestrator',
  imports: [],
  template: `<div #containerRef></div>`,
  styleUrl: './UiOrchestrator.scss',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiOrchestrator {
  @ViewChild('containerRef', {read: ViewContainerRef, static: true}) container!: ViewContainerRef;
  @Input() schema: any[] = []

  ngOnChanges() {
    this.renderSchema();
  }
  
  private renderSchema() {
    this.container.clear();

    this.schema.forEach(instruction => {
      const componentType = WIDGET_REGISTRY[instruction.type];
      if(componentType) {
        const componentRef = this.container.createComponent(componentType);
        Object.assign(componentRef.instance, instruction.data); // ???
      } else {
        console.warn(`Component type "${instruction.type}" not found in registry.`);
      }
    })
  }
}
