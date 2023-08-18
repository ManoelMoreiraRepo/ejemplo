import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './componets/cliente/cliente.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './componets/home/home.component';
import { FormsModule } from '@angular/forms';
import { NuevoclienteComponent } from './componets/cliente/nuevocliente.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    NuevoclienteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
