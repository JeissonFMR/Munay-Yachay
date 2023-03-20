import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrocitaComponent } from './carrocita/carrocita.component';
import { MurguitaComponent } from './murguita/murguita.component';
import { ColectivoCoreograficoComponent } from './colectivo-coreografico/colectivo-coreografico.component';
import { ComparsaComponent } from './comparsa/comparsa.component';
import { DisfrazIndividualComponent } from './disfraz-individual/disfraz-individual.component';
import { IntroduccionModalidadesComponent } from './introduccion-modalidades/introduccion-modalidades.component';
import { AportePedagogicoComponent } from './aporte-pedagogico/aporte-pedagogico.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'colectivocoreografico',
        component: ColectivoCoreograficoComponent
      },
      {
        path: 'murguita',
        component: MurguitaComponent
      },
      {
        path: 'carrocita',
        component: CarrocitaComponent
      },
      {
        path: 'comparsa',
        component: ComparsaComponent
      },
      {
        path: 'disfrazindividual',
        component: DisfrazIndividualComponent
      },
      {
        path: 'introduccion',
        component: IntroduccionModalidadesComponent
      },
      {
        path: 'aporte',
        component: AportePedagogicoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalidadesRoutingModule { }
