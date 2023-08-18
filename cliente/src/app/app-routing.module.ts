import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoclienteComponent } from './componets/cliente/nuevocliente.component';
import { HomeComponent } from './componets/home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'nuevocliente', component:NuevoclienteComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
