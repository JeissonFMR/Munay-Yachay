import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from './layouts/full/full-layout.component';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';

import { Full_ROUTES } from './shared/routes/full-layout.routes';
import { CONTENT_ROUTES } from './shared/routes/content-layout.routes';

import { AuthGuard } from './shared/auth/auth-guard.service';
import { LoginGuard } from './servicios/servicios.index';
import { MEMORY_ROUTES } from './shared/routes/rutasInit.routes';

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
  {
    path: '',
    // component: FullLayoutComponent,
    data: { title: 'memory carnaval' },
    children: MEMORY_ROUTES,
    runGuardsAndResolvers: 'always',
    canActivate: [LoginGuard]
  },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
