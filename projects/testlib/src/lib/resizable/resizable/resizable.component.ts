import { Component } from '@angular/core';

@Component({
  selector: 'lib-resizable',
  templateUrl: './resizable.component.html',
  providers: [
    { provide: 'RESIZABLE', useExisting: ResizableComponent }
  ]
})
export class ResizableComponent {

}
