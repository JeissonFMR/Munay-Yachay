import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalidadesRoutingModule } from './modalidades-routing.module';
import { MatchHeightModule } from '../shared/directives/match-height.directive';
import { CarrocitaComponent } from './carrocita/carrocita.component';
import { ColectivoCoreograficoComponent } from './colectivo-coreografico/colectivo-coreografico.component';
import { ComparsaComponent } from './comparsa/comparsa.component';
import { DisfrazIndividualComponent } from './disfraz-individual/disfraz-individual.component';
import { MurguitaComponent } from './murguita/murguita.component';
import { IntroduccionModalidadesComponent } from './introduccion-modalidades/introduccion-modalidades.component';
import { HorizontalTimelineComponent } from './horizontal/component/horizontal-timeline.component';
import { HorizontalTimelinePageComponent } from './horizontal/horizontal-timeline-page.component';
import { ChartistModule } from 'ng-chartist';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'app/materialAngular/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AportePedagogicoComponent } from './aporte-pedagogico/aporte-pedagogico.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    ModalidadesRoutingModule,
    MatchHeightModule,
    ChartistModule,
    AgmCoreModule,
    NgbModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  exports: [

  ],
  declarations: [
    CarrocitaComponent,
    ColectivoCoreograficoComponent,
    ComparsaComponent,
    DisfrazIndividualComponent,
    MurguitaComponent,
    IntroduccionModalidadesComponent,
    AportePedagogicoComponent,
    HorizontalTimelinePageComponent,
    HorizontalTimelineComponent
  ],
  providers: [

  ],
})
export class ModalidadesModule { }
