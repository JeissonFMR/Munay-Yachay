import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarnavalitoComponent } from './carnavalito/carnavalito.component';
import { AlegriaComponent } from './alegria/alegria.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { MatchHeightModule } from '../shared/directives/match-height.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'app/materialAngular/material/material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ConvocatoriasComponent } from './convocatorias/convocatorias.component';

@NgModule({
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    MatchHeightModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxDatatableModule,
    UiSwitchModule
  ],
  declarations: [
    CarnavalitoComponent,
    AlegriaComponent,
    PresentacionComponent,
    ConvocatoriasComponent
  ]
})
export class ProyectosModule { }
