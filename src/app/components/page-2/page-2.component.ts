import { Component, OnInit } from '@angular/core';
import { AtalhoService } from 'src/app/services/atalho.service';
import { ConsultaClienteComponent } from '../consulta-cliente/consulta-cliente.component';

@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  styleUrls: ['./page-2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(private atalhoService: AtalhoService) {
    this.atalhoService.add({ component: ConsultaClienteComponent, keys: 'Control.Shift.F1', description: 'Teste 1' });
  }

  ngOnInit() {
  }

}
