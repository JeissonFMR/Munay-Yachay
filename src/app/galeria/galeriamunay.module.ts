import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriamunayComponent } from './galeriamunay/galeriamunay.component';
import { GaleriaMunayRoutingModule } from './galeriamunay-routing.module';
import { MatchHeightModule } from 'app/shared/directives/match-height.directive';

@NgModule({
  imports: [
    CommonModule,
    GaleriaMunayRoutingModule,
    MatchHeightModule
  ],
  declarations: [
    GaleriamunayComponent
  ]
})
export class GaleriaMunayModule { }
