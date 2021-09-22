import { Directive, ElementRef, Input, OnInit } from '@angular/core';

/* Selector es el nombre con el que podemos usar la directiva */
@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit {

private _color: string = 'pink';
private _mensaje: string = 'Mensaje por defecto';

  htmlElement: ElementRef<HTMLElement>;
  /* Al establecer el color como un input, el elemento puede definir que color tiene o si no se indica por defecto será rojo */
  /* Al crear el color como una funcion, directamente recibimos el valor del color y se lo aplicamos al elemento. Con esto
     no mantenemos el valor recibido, si necesitaramos utilizarlo en la directiva tendríamos que asignarselo a otro atributo
     dentro de esta función */
  @Input() set color( valor: string ) {
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje( valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  };

  /* A la clase del html del elemento recibido le añadimos hidden o se lo quitamos en funcion de si es valido el mensaje o no
     Después ese tipo de clase hidden lo controlamos desde los estilos globales (fichero styles.css)*/
  @Input() set valido( valor: boolean) {
    if ( valor ){
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
    else
    {
      this.htmlElement.nativeElement.classList.add('hidden');
    }
  };

  /* Al pasarle el parametro al constructor le estamos indicando el elemento que está llamando a la directiva */
  constructor( private el: ElementRef<HTMLElement> ) { 
    this.htmlElement = el;
  }

  /* Establecemos el color y el mensaje por defecto en el caso que al llamar la directiva no se pase alguno de los dos atributos */
  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }

  setEstilo(): void {
    /* Con esta línea evitamos tener que poner el class="form-text" en el html del elemento */
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(){
    this.htmlElement.nativeElement.style.color = this._color;
  }
  
  setMensaje(){
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
