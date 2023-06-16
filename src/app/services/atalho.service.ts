import { ComponentType } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { EventManager } from '@angular/platform-browser';
import { AtalhoHelpModalComponent } from '../components/atalho-help-modal/atalho-help-modal.component';
import { Atalho } from '../models/atalho.model';
import { globalAtalhos } from './globals-atalhos';

@Injectable({
  providedIn: 'root'
})
export class AtalhoService {
  private dialogRef!: MatDialogRef<any>;
  private hotKeys = new Map<string, Atalho>();
  hotKeyHelp = 'Control.Shift.?';

  constructor(
    private dialogService: MatDialog,
    private eventManager: EventManager,
    @Inject(DOCUMENT) private document: HTMLElement
  ) { }

  add(atalho: Atalho) {
    this.hotKeys.set(atalho.keys, atalho);
    const event = `keydown.${atalho.keys}`;
    this.eventManager.addEventListener(this.document, event, () => {
      this.openModal(atalho.component, {
        data: atalho
      });
    });
  }
 
  callAtalho(key: string) {
    const atalho: Atalho = new Atalho({ ...this.hotKeys.get(key) });
    if (atalho) {
      this.openModal(atalho.component, { data: atalho });
    }
  }

  startHelperAtalhos() {
    if (globalAtalhos.length > 0) {
      globalAtalhos.forEach(a => this.add(a));
    }
    this.eventManager.addEventListener(this.document, `keydown.${this.hotKeyHelp}`, () => {
      this.openModalHelper()
    });
  }

  openModalHelper() {
    this.openModal(AtalhoHelpModalComponent, {
      data: { description: 'Guia de Atalhos', atalhos: Array.from(this.hotKeys.values()) },
      width: '500px',
      maxHeight: '90vh'
    });
  }

  private openModal(component: ComponentType<any>, config?: MatDialogConfig<any>) {
    if (!!this.dialogRef)
      this.dialogRef.close();
    this.dialogRef = this.dialogService.open(component, config);
  }
}
