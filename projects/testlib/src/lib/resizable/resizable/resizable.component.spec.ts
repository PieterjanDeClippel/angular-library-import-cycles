import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockDirective } from 'ng-mocks';
import { ResizableComponent } from "./resizable.component";
import { Directive, Inject, Input } from '@angular/core';
import { ResizableGlyphDirective } from '../resizable-glyph/resizable-glyph.directive';

// @Directive({ selector: '[resizableGlyph]' })
// class ResizableGlyphMockDirective {
//   constructor(@Inject('RESIZABLE') private resizable: ResizableComponent) { }
//   @Input('resizableGlyph') positions: ('top' | 'end' | 'bottom' | 'start')[] = [];
// }

describe('BsResizableComponent', () => {
  let component: ResizableComponent;
  let fixture: ComponentFixture<ResizableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        // Unit to test
        ResizableComponent,
        
        // Mock dependencies
        MockDirective(ResizableGlyphDirective),
        // ResizableGlyphMockDirective
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResizableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
