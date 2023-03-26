import { Routes, RouterModule } from '@angular/router';

// Route for content the start..

export const MEMORY_ROUTES: Routes = [
    {
        path: '',
        loadChildren: './memory-carnaval/memory-carnaval.module#MemoryCarnavalModule'
    },
    {
        path: '',
        loadChildren: './our-carnaval/our-carnaval.module#OurCarnavalModule'
    }
];
