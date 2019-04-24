import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { SubrouteComponent } from './subroute/subroute.component';

const routes: Routes = [
  /*{ path: '', pathMatch: 'full', component: EmptyRouteComponent },*/
  { path: 'subroute', component: SubrouteComponent },
  { path: '**', component: EmptyRouteComponent },
  /*{ path: '**', redirectTo: '' },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
