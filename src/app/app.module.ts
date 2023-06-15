import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaClienteComponent } from './components/consulta-cliente/consulta-cliente.component';
import { HelperClienteModalDirective } from './shared/directives/helper-cliente-modal.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AtalhoService } from './services/atalho.service';
import { AtalhoHelpModalComponent } from './components/atalho-help-modal/atalho-help-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaClienteComponent,
    AtalhoHelpModalComponent,
    HelperClienteModalDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [AtalhoService, HelperClienteModalDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
