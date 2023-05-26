import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesfileMagnoRoutingModule } from './desfile-magno-routing.module';
import { BienvenidaMagnoComponent } from './bienvenida-magno/bienvenida-magno.component';
import { MaterialModule } from 'app/materialAngular/material/material.module';
import { DisfrazIndividualComponent } from './disfraz-individual/disfraz-individual.component';
import { SharedModule } from '../shared/shared.module';
import { ComparzaComponent } from './comparza/comparza.component';
import { MurgaComponent } from './murga/murga.component';
import { CarrozaComponent } from './carroza/carroza.component';
import { CarrozaNoMotoriComponent } from './carroza-no-motori/carroza-no-motori.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DesfileMagnoRoutingModule,
    SharedModule
  ],
  declarations: [BienvenidaMagnoComponent, DisfrazIndividualComponent, ComparzaComponent, MurgaComponent, CarrozaComponent, CarrozaNoMotoriComponent]
})
export class DesfileMagnoModule { }
