import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {
  
  @Input("appAppHighlight") color: string;
  @Input() defaultColor: string;

  constructor(private elementRef: ElementRef) {
    //this.elementRef.nativeElement.style.backgroundColor = "yellow";
   }

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight(this.color|| this.defaultColor || 'grey');
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight(null);
  }

  highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
