import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html'
})
export class DetailDialogComponent<T> implements OnInit {
  public listParam;

  constructor(public dialogRef: MatDialogRef<DetailDialogComponent<T>>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.listParam = Object.keys(this.data.object);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
