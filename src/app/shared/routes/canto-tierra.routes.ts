import { Routes, RouterModule } from '@angular/router';

// Route for content the start..

export const CANTO_TIERRA_ROUTES: Routes = [
  {
    path: 'cantoalatierra',
    loadChildren: './canto-a-tierra/canto-a-tierra.module#CantoATierraModule'
  },
];
