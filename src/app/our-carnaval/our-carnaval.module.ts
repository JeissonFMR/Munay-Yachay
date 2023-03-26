import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurCarnavalRoutingModule } from './our-carnaval-routing.module';
import { OurCarnavalComponent } from './our-carnaval/our-carnaval.component';

@NgModule({
  imports: [
    CommonModule,
    OurCarnavalRoutingModule
  ],
  declarations: [OurCarnavalComponent]
})
export class OurCarnavalModule { }
