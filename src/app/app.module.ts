import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { ArteComponent } from './componentes/arte/arte.component';
import { MusicaComponent } from './componentes/musica/musica.component';
import { DeporteComponent } from './componentes/deporte/deporte.component';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { DatosMedicosComponent } from './componentes/datos-medicos/datos-medicos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArteComponent,
    MusicaComponent,
    DeporteComponent,
    DatosPersonalesComponent,
    DatosMedicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
