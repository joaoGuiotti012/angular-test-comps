import { ComponentType } from "@angular/cdk/portal";
import { Injector } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { ConsultaClienteComponent } from "../components/consulta-cliente/consulta-cliente.component";
import { BasePage } from "./base-page";
import { AtalhoService } from "../services/atalho.service";

export class BasePageHelperConsulta extends BasePage {
    dialogService!: MatDialog;
    dialogRef!: MatDialogRef<any>;
    atalhoService!: AtalhoService;

    constructor(injector: Injector) {
        super(injector)
        this.startInjections(injector);
    }

    private startInjections(injector: Injector) {
        this.dialogService = injector.get(MatDialog);
        this.atalhoService = injector.get(AtalhoService);
    }

    private handleOpenConsultaCliente() {
        this.openModal(ConsultaClienteComponent);
    }

    private openModal(component: ComponentType<any>, config?: MatDialogConfig<any>) {
        if (!!this.dialogRef && this.dialogRef.componentInstance instanceof component)
            this.dialogRef.close();
        this.dialogRef = this.dialogService.open(component, config);
    }
}