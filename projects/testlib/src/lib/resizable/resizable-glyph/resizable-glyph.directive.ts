import { Directive, Inject, Input } from '@angular/core';
import type { ResizableComponent } from '../resizable/resizable.component';

export type Position = 'top' | 'end' | 'bottom' | 'start';

@Directive({
  selector: '[resizableGlyph]'
})
export class ResizableGlyphDirective {

  constructor(@Inject('RESIZABLE') private resizable: ResizableComponent) { }

  @Input('resizableGlyph') positions: Position[] = [];

}
