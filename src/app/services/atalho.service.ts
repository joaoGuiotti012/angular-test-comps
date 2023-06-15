import { ComponentType } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { EventManager } from '@angular/platform-browser';
import { AtalhoHelpModalComponent } from '../components/atalho-help-modal/atalho-help-modal.component';
import { Atalho } from '../models/atalho.model';

@Injectable({
  providedIn: 'root'
})
export class AtalhoService {
  dialogRef!: MatDialogRef<any>;
  hotKeys = new Map();
  hotKeyHelp = 'Control.Shift.?';

  constructor(
    private dialogService: MatDialog,
    private eventManager: EventManager,
    @Inject(DOCUMENT) private document: HTMLElement
  ) {
    this.startHelperAtalhos();
  }

  add(atalho: Atalho) {
    this.hotKeys.set(atalho.keys, atalho.description);
    const event = `keydown.${atalho.keys}`;
    this.eventManager.addEventListener(this.document, event, () => {
      this.openModal(atalho.component);
    });
  }

  private startHelperAtalhos() {
    this.eventManager.addEventListener(this.document, `keydown.${this.hotKeyHelp}`, () => {
      this.openModal(AtalhoHelpModalComponent, {
        data: Array.from(this.hotKeys.entries()),
        width: '500px',
      });
    });
  }

  private openModal(component: ComponentType<any>, config?: MatDialogConfig<any>) {
    if (!!this.dialogRef)
      this.dialogRef.close();
    this.dialogRef = this.dialogService.open(component, config);
  }
}
