import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { frutaComponent } from './frutita/fruta.component';
import { empleadosComponent } from './empleados/empleados.component';

import { homeComponent } from './home/home.component';
import { contactoComponent } from './contacto/contacto.component';
import{ ConversorPipe } from './pipes/conversor.pipe';
import{ CochesComponent } from './coches/coches.component';

@NgModule({
  declarations: [
    AppComponent,
    frutaComponent,
    empleadosComponent,
    homeComponent,
    contactoComponent,
    CochesComponent,
    ConversorPipe

  ],
 //Se carga el modulo de rutas
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing

  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
