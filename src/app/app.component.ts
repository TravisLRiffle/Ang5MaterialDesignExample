import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  panelOpenState: boolean = false;
  
  links = Array.from(["foo", "snoo", "zoo", "doo"]);
  showInfo(link): any {
    console.log("woah")
  }
  constructor(public dialog: MatDialog) {}

    openDialog(): void {
    let dialogRef = this.dialog.open(AppDialog, {
      width: '400px',
      height: '800px'
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}

@Component({
  selector: 'app-dialog',
  templateUrl: 'app-dialog.html'
})
export class AppDialog {

  constructor(
    public dialogRef: MatDialogRef<AppDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
