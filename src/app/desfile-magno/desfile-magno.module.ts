import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesfileMagnoRoutingModule } from './desfile-magno-routing.module';
import { BienvenidaMagnoComponent } from './bienvenida-magno/bienvenida-magno.component';

@NgModule({
  imports: [
    CommonModule,
    DesfileMagnoRoutingModule
  ],
  declarations: [BienvenidaMagnoComponent]
})
export class DesfileMagnoModule { }
