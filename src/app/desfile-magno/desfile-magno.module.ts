import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesfileMagnoRoutingModule } from './desfile-magno-routing.module';
import { BienvenidaMagnoComponent } from './bienvenida-magno/bienvenida-magno.component';
import { MaterialModule } from 'app/materialAngular/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DesfileMagnoRoutingModule
  ],
  declarations: [BienvenidaMagnoComponent]
})
export class DesfileMagnoModule { }
