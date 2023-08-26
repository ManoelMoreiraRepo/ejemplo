import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditclienteComponent } from './componets/cliente/editcliente.component';
import { NuevoclienteComponent } from './componets/cliente/nuevocliente.component';
import { HomeComponent } from './componets/home/home.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'nuevocliente', component:NuevoclienteComponent},
  {path:'editcliente/:id', component:EditclienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
