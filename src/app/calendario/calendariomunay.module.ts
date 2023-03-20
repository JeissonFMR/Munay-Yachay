import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { CalendarioamunayComponent} from './calendariomunay/calendariomunay.component';
import { CalendarioMunayRoutingModule } from './calendariomunay-routing.module';
import { MatchHeightModule } from 'app/shared/directives/match-height.directive';

@NgModule({
  imports: [
    CommonModule,
    CalendarioMunayRoutingModule,
    MatchHeightModule,
    NgbModule,
  ],
  declarations: [
    CalendarioamunayComponent,
  ]
  })
export class CalendarioMunayModule { }
