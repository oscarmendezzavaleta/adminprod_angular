import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { PageRoutingModule } from './pages/pages.routing';
import { authRoutingModule } from './auth/auth.Routing';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';




const routes: Routes= [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: '**', component: NopagefoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    PageRoutingModule,
    authRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
