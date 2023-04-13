import { Directive, Inject, Input } from '@angular/core';
import type { ResizableComponent } from '../resizable/resizable.component'; // Unit tests don't work

// export type Position = 'top' | 'end' | 'bottom' | 'start';

@Directive({
  selector: '[resizableGlyph]'
})
export class ResizableGlyphDirective {

  // Using ResizableComponent in the constructor fails
  constructor(@Inject('RESIZABLE') resizable: any) {
    this.resizable = resizable;
  }

  @Input('resizableGlyph') positions: ('top' | 'end' | 'bottom' | 'start')[] = [];
  resizable: ResizableComponent;
}
