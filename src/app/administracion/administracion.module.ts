import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchHeightModule } from '../shared/directives/match-height.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'app/materialAngular/material/material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UiSwitchModule } from 'ngx-ui-switch';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RolesComponent } from './roles/roles.component';
import { AlegriaComponent } from './alegria/alegria.component';
import { CarnavalitoComponent } from './carnavalito/carnavalito.component';

@NgModule({
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    MatchHeightModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxDatatableModule,
    UiSwitchModule
  ],
  declarations: [
    UsuariosComponent,
    AlegriaComponent,
    RolesComponent,
    CarnavalitoComponent
  ]
})
export class AdministracionModule { }
