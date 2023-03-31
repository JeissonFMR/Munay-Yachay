import { Routes, RouterModule } from '@angular/router';

// Route for content the start..

export const OUR_ROUTES: Routes = [
    {
        path: '',
        loadChildren: './our-carnaval/our-carnaval.module#OurCarnavalModule'
    }
];
