import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav-short',
  templateUrl: './sidenav-short.component.html',
  styleUrls: ['./sidenav-short.component.scss']
})
export class SidenavShortComponent implements OnInit {


  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.sidenav.mode = 'side';
    this.sidenav.fixedInViewport = true;
    this.cdr.detectChanges();
  }

}
