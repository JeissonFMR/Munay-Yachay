import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RolesComponent } from './roles/roles.component';
import { AlegriaComponent } from './alegria/alegria.component';
import { CarnavalitoComponent } from './carnavalito/carnavalito.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: 'palegria',
        component: AlegriaComponent
      },
      {
        path: 'pcarnavalito',
        component: CarnavalitoComponent
      },
      // {
      //   path: 'carnavalalegria',
      //   component: AlegriaComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministracionRoutingModule { }
