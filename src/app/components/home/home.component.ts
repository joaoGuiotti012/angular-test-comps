import { Component, HostListener, Injector, OnInit } from '@angular/core';
import { AtalhoService } from '../../services/atalho.service';
import { ConsultaClienteComponent } from '../consulta-cliente/consulta-cliente.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private atalhoService: AtalhoService) {
    this.atalhoService.add({ component: ConsultaClienteComponent, keys: 'Control.Shift.!', description: 'Consultar Clientes' })
    this.atalhoService.add({ component: ConsultaClienteComponent, keys: 'Control.Shift.@', description: 'Consultar Clientes 2' })
    this.atalhoService.add({ component: ConsultaClienteComponent, keys: 'Shift.#', description: 'Consultar Clientes 3' })
    this.atalhoService.add({ component: ConsultaClienteComponent, keys: 'Shift.F1', description: 'Consultar Clientes 3' })
  }

  ngOnInit() {
  }

}
