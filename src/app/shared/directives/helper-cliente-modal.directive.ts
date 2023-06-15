import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[helperModalClientes]'
})
export class HelperClienteModalDirective {

  constructor() {
    console.log('iniciando directive modal clientes');
  }

  @HostListener("window:keydown", ["$event"])
  handleKeyDown(e: any) {
    console.log('window:keydown' , e);
  }


}
