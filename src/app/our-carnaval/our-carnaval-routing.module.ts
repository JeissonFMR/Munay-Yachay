import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurCarnavalComponent } from './our-carnaval/our-carnaval.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ourcarnaval',
        component: OurCarnavalComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurCarnavalRoutingModule { }
