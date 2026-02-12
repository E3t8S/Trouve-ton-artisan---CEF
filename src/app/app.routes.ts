import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { NotFound } from './pages/not-found/not-found';
import { Artisan } from './pages/artisan/artisan';
import { Liste } from './pages/liste/liste';

export const routes: Routes = [
    {path:"", component:Accueil},
    {path:"liste", component:Liste},
    {path:"artisan", component:Artisan},
    {path:"**", component:NotFound},
];
