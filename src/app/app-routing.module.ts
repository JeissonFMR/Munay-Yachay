import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from './layouts/full/full-layout.component';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';

import { Full_ROUTES } from './shared/routes/full-layout.routes';
import { CONTENT_ROUTES } from './shared/routes/content-layout.routes';

import { AuthGuard } from './shared/auth/auth-guard.service';
import { LoginGuard } from './servicios/servicios.index';
import { MEMORY_ROUTES } from './shared/routes/memory-carnaval.routes';
import { OUR_ROUTES } from './shared/routes/our-carnaval.routes';
import { CantoTierraComponent } from './layouts/canto-tierra/canto-tierra.component';
import { CANTO_TIERRA_ROUTES } from './shared/routes/canto-tierra.routes';
import { DESFILE_MAGNO_ROUTES } from './shared/routes/desfile-magno.routes';
import { DesfileMagnoComponent } from './layouts/desfile-magno/desfile-magno.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'pages/welcome',
    pathMatch: 'full',
  },
  {
    path: 'login',
    redirectTo: 'pages/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: { title: 'full Views' },
    children: Full_ROUTES,
    runGuardsAndResolvers: 'always',
    canActivate: [LoginGuard]
  },
  //memorias del carnaval
  {
    path: '',
    // component: FullLayoutComponent,
    data: { title: 'memory carnaval' },
    children: MEMORY_ROUTES,
    runGuardsAndResolvers: 'always',
    canActivate: [LoginGuard]
  },
  {
    path: '',
    component: CantoTierraComponent,
    data: { title: 'full canto a la tierra' },
    children: CANTO_TIERRA_ROUTES,
    runGuardsAndResolvers: 'always',
    canActivate: [LoginGuard]
  },
  {
    path: '',
    component: DesfileMagnoComponent,
    data: { title: 'full desfile magno' },
    children: DESFILE_MAGNO_ROUTES,
    runGuardsAndResolvers: 'always',
    canActivate: [LoginGuard]
  },



  //nuestro carnaval
  {
    path: '',
    // component: FullLayoutComponent,
    data: { title: 'our carnaval' },
    children: OUR_ROUTES
  },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
