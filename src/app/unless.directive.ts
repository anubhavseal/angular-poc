import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {
    if(condition !== true && this.hasView === false) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if(condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
  private hasView = false;
  constructor(
    private templateRef: TemplateRef<any>, 
    private viewContainer: ViewContainerRef
  ) { }

}
