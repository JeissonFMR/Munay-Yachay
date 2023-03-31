import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CantoATierraRoutingModule } from './canto-a-tierra-routing.module';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CantoATierraRoutingModule,
    SharedModule
  ],
  declarations: [BienvenidaComponent]
})
export class CantoATierraModule { }
