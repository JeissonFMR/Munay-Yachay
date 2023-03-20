import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarnavalitoComponent } from './carnavalito/carnavalito.component';
import { AlegriaComponent } from './alegria/alegria.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ConvocatoriasComponent } from './convocatorias/convocatorias.component';




const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'presentacion',
        component: PresentacionComponent
      },
      {
        path: 'convocatorias',
        component: ConvocatoriasComponent
      },
      {
        path: 'carnavalito',
        component: CarnavalitoComponent
      },
      {
        path: 'carnavalalegria',
        component: AlegriaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectosRoutingModule { }
