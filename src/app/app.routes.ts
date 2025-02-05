import { RouterModule, Routes } from '@angular/router';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'customer',component:UserlistingComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
