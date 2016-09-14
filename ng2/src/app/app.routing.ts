import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: '**', redirectTo: '/welcome' }
];
export const appRouting = RouterModule.forRoot(appRoutes, { useHash: true });