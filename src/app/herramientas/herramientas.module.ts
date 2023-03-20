import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicaComponent } from './musica/musica.component';
import { HerramientasRoutingModule } from './herramientas-routing.module';
import { MatchHeightModule } from '../shared/directives/match-height.directive';
import { CartografiaComponent } from './cartografia/cartografia.component';
import { MovimientoComponent } from './movimiento/movimiento.component';
import { MaquillajeComponent } from './maquillaje/maquillaje.component';
import { ModeladoComponent } from './modelado/modelado.component';
import { IntroduccionHerramientasComponent } from './introduccion-herramientas/introduccion-herramientas.component';
import { GlosarioComponent } from './glosario/glosario.component';


@NgModule({
  imports: [
    CommonModule,
    HerramientasRoutingModule,
    MatchHeightModule
  ],
  declarations: [
    MusicaComponent,
    CartografiaComponent,
    MovimientoComponent,
    MaquillajeComponent,
    ModeladoComponent,
    IntroduccionHerramientasComponent,
    GlosarioComponent

  ]
})
export class HerramientasModule { }
