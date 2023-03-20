import { Routes, RouterModule } from '@angular/router';

// Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'admin',
    loadChildren: './administracion/administracion.module#AdministracionModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'modalidades',
    loadChildren: './modalidades/modalidades.module#ModalidadesModule'
  },
  {
    path: 'herramientas',
    loadChildren: './herramientas/herramientas.module#HerramientasModule'
  },
  {
    path: 'proyectos',
    loadChildren: './proyectos/proyectos.module#ProyectosModule'
  },
  {
    path: 'calendario',
    loadChildren: './calendario/calendariomunay.module#CalendarioMunayModule'
  },
  {
    path: 'galeria',
    loadChildren: './galeria/galeriamunay.module#GaleriaMunayModule'
  },
  {
    path: 'links',
    loadChildren: './links/links.module#LinksModule'
  },
  {
    path: 'pages',
    loadChildren: './pages/full-pages/full-pages.module#FullPagesModule'
  },
  {
    path: 'info',
    loadChildren: './informacion/informacion.module#InformacionModule'
  }
];
