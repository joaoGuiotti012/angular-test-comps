import { Component } from '@angular/core';
import { AtalhoService } from './services/atalho.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test-comps';

  constructor(private atalhoService: AtalhoService) {

  }
  
  openHelperAtalhos() {
    this.atalhoService.openModalHelper();
  }
}
