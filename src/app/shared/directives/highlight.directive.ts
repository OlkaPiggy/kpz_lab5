import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'blue';
    this.el.nativeElement.style.color = 'white';
    this.el.nativeElement.style.width = '150px';
    this.el.nativeElement.style.height = '30px';
    this.el.nativeElement.style.textAlign = 'center';
   }

}
