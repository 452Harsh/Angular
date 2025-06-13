import { Routes } from '@angular/router';

import { Profile } from './profile/profile';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [


    {path : "profile/:id/:name" , component: Profile},
    {path:'**',component:PageNotFound}

];
