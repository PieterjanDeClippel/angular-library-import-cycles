import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockDirective } from 'ng-mocks';
import { ResizableComponent } from "./resizable.component";
import { ResizableGlyphDirective } from '../resizable-glyph/resizable-glyph.directive';

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
      ],
      providers: [
        // MockProvider('RESIZABLE', BsResizableComponent, 'useClass')
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
