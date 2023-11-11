import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArteComponent } from './componentes/arte/arte.component';
import { MusicaComponent } from './componentes/musica/musica.component';
import { DeporteComponent } from './componentes/deporte/deporte.component';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { DatosMedicosComponent } from './componentes/datos-medicos/datos-medicos.component';
import { HomeComponent } from './componentes/home/home.component';
import { ConfirmacionComponent } from './componentes/confirmacion/confirmacion.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: HomeComponent},
  {path:'arte', component: ArteComponent},
  {path:'musica', component: MusicaComponent},
  {path:'deporte', component: DeporteComponent},
  {path:'datosPersonales', component: DatosPersonalesComponent},
  {path:'datosMedicos', component: DatosMedicosComponent},
  {path:'confirmacion', component: ConfirmacionComponent},
  {path:'**',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
