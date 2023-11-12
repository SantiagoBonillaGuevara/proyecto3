import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { ArteComponent } from './componentes/arte/arte.component';
import { MusicaComponent } from './componentes/musica/musica.component';
import { DeporteComponent } from './componentes/deporte/deporte.component';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { DatosMedicosComponent } from './componentes/datos-medicos/datos-medicos.component';
import { ConfirmacionComponent } from './componentes/confirmacion/confirmacion.component';
import { DataService } from './componentes/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArteComponent,
    MusicaComponent,
    DeporteComponent,
    DatosPersonalesComponent,
    DatosMedicosComponent,
    ConfirmacionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
