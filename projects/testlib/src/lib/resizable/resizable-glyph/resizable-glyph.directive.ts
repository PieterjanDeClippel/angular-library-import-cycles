import { Directive, Input } from '@angular/core';
import { ResizableComponent } from '../resizable/resizable.component';

export type Position = 'top' | 'end' | 'bottom' | 'start';

@Directive({
  selector: '[resizableGlyph]'
})
export class ResizableGlyphDirective {

  constructor(private resizable: ResizableComponent) { }

  @Input('resizableGlyph') positions: Position[] = [];

}
