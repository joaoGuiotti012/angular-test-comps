import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Atalho } from '../../models/atalho.model';
import { AtalhoService } from 'src/app/services/atalho.service';

@Component({
  selector: 'app-atalho-help-modal',
  templateUrl: './atalho-help-modal.component.html',
  styleUrls: ['./atalho-help-modal.component.scss']
})
export class AtalhoHelpModalComponent implements OnInit {

  atalhos = this.data.atalhos;
  title = this.data.description;

  constructor(
    public dialogRef: MatDialogRef<AtalhoHelpModalComponent>,
    private atalhoService: AtalhoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.atalhos);
  }

  handleOpenAtalho(atalho: Atalho) {
    this.atalhoService.callAtalho(atalho.keys);
  }

}
