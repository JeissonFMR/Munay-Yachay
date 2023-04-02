import { ChangeDetectorRef, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav-short',
  templateUrl: './sidenav-short.component.html',
  styleUrls: ['./sidenav-short.component.scss']
})
export class SidenavShortComponent implements OnInit {


  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private cdr: ChangeDetectorRef) { }

  @Input() routes: any[];

  ngOnInit() {
    console.log(this.routes);
  }


  ngAfterViewInit() {
    this.sidenav.mode = 'side';
    this.sidenav.fixedInViewport = true;
    this.cdr.detectChanges();
  }

}
