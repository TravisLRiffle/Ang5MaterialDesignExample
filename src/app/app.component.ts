import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';

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
    let config = new  MatDialogConfig();
    config.position = {
      top: "10px",
      left: "10px"
    }
    config.width ='400px';
    config.height = '800px';
    let dialogRef = this.dialog.open(AppDialog, config);
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

  filters = Array.from(["filter1", "filter2", "filter3", "filter4"]);
  options = Array.from(["opt1", "opt2", "opt3", "opt4", "opt5", "opt6"]);

  constructor(
    public dialogRef: MatDialogRef<AppDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
