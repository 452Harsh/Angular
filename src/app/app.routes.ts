import { Routes } from '@angular/router';
import { Aboutus } from './aboutus/aboutus';
import { Contactus } from './contactus/contactus';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path:'about',component:Aboutus},
    {path:'contact',component:Contactus},
    {path:'**',component:PageNotFound}
];
