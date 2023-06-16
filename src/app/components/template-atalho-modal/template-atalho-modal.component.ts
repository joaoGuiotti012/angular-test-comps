import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'template-atalho-modal',
  templateUrl: './template-atalho-modal.component.html',
  styleUrls: ['./template-atalho-modal.component.scss']
})
export class TemplateAtalhoModalComponent implements OnInit {
  @Output('close') closeEmitter = new EventEmitter();
  @Input() showHeader = true;
  @Input() title: string = '';

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closeEmitter.emit();
  }

}
