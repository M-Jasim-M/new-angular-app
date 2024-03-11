import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedel]'
})
export class RedelDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.color = 'red';
  }
 
}
