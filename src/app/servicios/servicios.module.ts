import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import {
  UsuarioService,
  ImagenesService,
  ProyectoService,
  RoleService
} from './servicios.index';

import { HttpClientModule } from '@angular/common/http';
import { LoginGuard } from './guards/login-guard.guard';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [
  ],
  providers: [
    LoginGuard,
    UsuarioService,
    ImagenesService,
    ProyectoService,
    RoleService
  ]
})
export class ServiciosModule { }
