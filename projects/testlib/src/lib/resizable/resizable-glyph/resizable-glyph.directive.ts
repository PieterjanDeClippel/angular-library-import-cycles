import { Directive, Inject, Input } from '@angular/core';
// import { ResizableComponent } from '../resizable/resizable.component'; // Project won't build (npm run build -- --configuration production)
import type { ResizableComponent } from '../resizable/resizable.component'; // Unit tests don't work

export type Position = 'top' | 'end' | 'bottom' | 'start';

@Directive({
  selector: '[resizableGlyph]'
})
export class ResizableGlyphDirective {

  constructor(@Inject('RESIZABLE') private resizable: ResizableComponent) { }

  @Input('resizableGlyph') positions: Position[] = [];

}
