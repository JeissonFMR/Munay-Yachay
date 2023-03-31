import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  sidenavOpened = false;
  sidenavMode = 'side';
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.sidenav.mode = 'side';
    this.sidenav.fixedInViewport = true;
  }

}
