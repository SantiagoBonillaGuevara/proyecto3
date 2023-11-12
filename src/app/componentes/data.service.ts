import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicioService } from './servicio.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'assets/datos.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient, private s: ServicioService) {}

  getDatos() {
    return this.http.get(this.url);
  }
  obtenerDatosModificados() {
    return this.http.get(this.url).pipe(
      map((datos: any) => {
        // Modificar la propiedad Nombre según tus necesidades
        datos.Nombre = this.s.nombre;
        datos.Apellido = this.s.apellido;
        datos.Documento = this.s.identificacion;
        datos.Telefono = this.s.telefono;
        datos.Correo = this.s.correo;
        datos.Clase = this.s.clase;
        datos.Fecha = this.s.fecha;
        datos.Necesita_Materiales = this.s.materiales;
        return datos;
      })
    );
  }
}
