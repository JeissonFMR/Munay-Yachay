import { Routes, RouterModule } from '@angular/router';

// Route for content the start..

export const DESFILE_MAGNO_ROUTES: Routes = [
  {
    path: 'desfilemagno',
    loadChildren: './desfile-magno/desfile-magno.module#DesfileMagnoModule'
  },
];
