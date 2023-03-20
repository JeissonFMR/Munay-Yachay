import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchHeightModule } from '../shared/directives/match-height.directive';
import { InformacionRoutingModule } from './informacion-routing.module';
import { AutoresComponent } from './autores/autores.component';
import { BibliografiaComponent } from './bibliografia/bibliografia.component';


@NgModule({
  imports: [
    CommonModule,
    InformacionRoutingModule,
    MatchHeightModule
  ],
  declarations: [
    AutoresComponent,
    BibliografiaComponent
  ]
})
export class InformacionModule { }
