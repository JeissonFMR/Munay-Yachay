import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicaComponent } from './musica/musica.component';
import { CartografiaComponent } from './cartografia/cartografia.component';
import { MaquillajeComponent } from './maquillaje/maquillaje.component';
import { ModeladoComponent } from './modelado/modelado.component';
import { MovimientoComponent } from './movimiento/movimiento.component';
import { IntroduccionHerramientasComponent } from './introduccion-herramientas/introduccion-herramientas.component';
import { GlosarioComponent } from './glosario/glosario.component';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'musica',
        component: MusicaComponent
      },
      {
        path: 'cartografia',
        component: CartografiaComponent
      },
      {
        path: 'maquillaje',
        component: MaquillajeComponent
      },
      {
        path: 'modelado',
        component: ModeladoComponent
      },
      {
        path: 'movimiento',
        component: MovimientoComponent
      },
      {
        path: 'introduccion',
        component: IntroduccionHerramientasComponent
      },
      {
        path: 'glosario',
        component: GlosarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerramientasRoutingModule { }
