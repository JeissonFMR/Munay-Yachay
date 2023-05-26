import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSidenav } from '@angular/material';
import { ModalWelcomeComponent } from '../modal-welcome/modal-welcome.component';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  // @ViewChild('sidenav') sidenav: MatSidenav;

  // sidenavOpened = false;
  // sidenavMode = 'side';
  constructor(public dialog: MatDialog, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.openDialog()
  }


  openDialog() {
    const dialogRef = this.dialog.open(ModalWelcomeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });


  }
}
