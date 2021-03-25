import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTestDirective]',
})
export class TestDirectiveDirective {
  constructor(private elementRef: ElementRef) {
    console.log(this.elementRef.nativeElement);
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseenter') handleMouseEnter() {
    console.log('mouseenter');
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
  @HostListener('mouseleave') handleMouseLeave() {
    console.log('mouseleave');
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
  }
}
