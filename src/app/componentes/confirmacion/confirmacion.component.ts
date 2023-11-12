import { Component} from '@angular/core';
import { ServicioService } from '../servicio.service';
import { JsonService } from 'src/app/json.service';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})


export class ConfirmacionComponent {
  constructor(public s:ServicioService, private jsonService: JsonService){}
  obtenerDatos(): any {
    return {
      nombre: this.s.nombre,
      apellido: this.s.apellido,
      documento: this.s.identificacion,
      telefono: this.s.telefono,
      correo: this.s.correo,
      clase: this.s.clase,
      fecha: this.s.fecha,
      materiales: this.s.materiales
    };
  
  }  
  crearArchivoJson() {
    const datos = this.obtenerDatos();
    this.jsonService.llenarArchivoJson(datos);
  }
}
