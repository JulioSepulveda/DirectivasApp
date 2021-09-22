import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  /* Otra forma de controlar si el formulario es válido o no. más complicada que en la otra directiva */
  @Input() set customIf ( condicion: boolean ) {
    if ( condicion ) {
      this.viewContainer.createEmbeddedView( this.templateRef );
    }
    else {
      this.viewContainer.clear();
    }
  }
  constructor( private templateRef: TemplateRef<HTMLElement>,
               private viewContainer: ViewContainerRef) {}

}
