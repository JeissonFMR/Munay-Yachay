import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CantoATierraRoutingModule } from './canto-a-tierra-routing.module';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { SharedModule } from '../shared/shared.module';
import { ContentCantoALaTierraComponent } from './content-canto-ala-tierra/content-canto-ala-tierra.component';

@NgModule({
  imports: [
    CommonModule,
    CantoATierraRoutingModule,
    SharedModule
  ],
  declarations: [BienvenidaComponent, ContentCantoALaTierraComponent]
})
export class CantoATierraModule { }
