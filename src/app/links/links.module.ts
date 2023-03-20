import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { LinksComponent} from './links/links.component';
import { LinksRoutingModule } from './links-routing.module';
import { MatchHeightModule } from 'app/shared/directives/match-height.directive';

@NgModule({
  imports: [
    CommonModule,
    LinksRoutingModule,
    MatchHeightModule,
    NgbModule,
  ],
  declarations: [
    LinksComponent,
  ]
  })
export class LinksModule { }
