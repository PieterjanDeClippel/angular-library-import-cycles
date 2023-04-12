import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableComponent } from './resizable/resizable.component';
import { ResizableGlyphDirective } from './resizable-glyph/resizable-glyph.directive';



@NgModule({
  declarations: [
    ResizableComponent,
    ResizableGlyphDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResizableComponent,
    ResizableGlyphDirective
  ]
})
export class ResizableModule { }
