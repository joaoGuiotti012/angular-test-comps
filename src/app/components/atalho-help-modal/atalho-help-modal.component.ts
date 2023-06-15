import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Atalho } from '../../models/atalho.model';

@Component({
  selector: 'app-atalho-help-modal',
  templateUrl: './atalho-help-modal.component.html',
  styleUrls: ['./atalho-help-modal.component.scss']
})
export class AtalhoHelpModalComponent implements OnInit {

  atalhos = this.data;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.atalhos);
  }

}
