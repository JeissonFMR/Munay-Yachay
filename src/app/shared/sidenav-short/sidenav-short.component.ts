import { ChangeDetectorRef, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario/usuario.service';

@Component({
  selector: 'app-sidenav-short',
  templateUrl: './sidenav-short.component.html',
  styleUrls: ['./sidenav-short.component.scss']
})
export class SidenavShortComponent implements OnInit {


  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private cdr: ChangeDetectorRef, private router: Router, private _usuarioService: UsuarioService) { }

  @Input() routes: any[];


  ngOnInit() {
    console.log('LAS RUTAS SON-->', this.routes);
  }


  ngAfterViewInit() {
    this.sidenav.mode = 'side';
    this.sidenav.fixedInViewport = true;
    this.cdr.detectChanges();
  }


  cerrarSesion() {

    //ELIMINAR EL TOKEN DE SESION
    this._usuarioService.logout();

    //Navegar a pagina welcome
    this.router.navigateByUrl('/')
  }

}
