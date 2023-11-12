import { Component, OnInit} from '@angular/core';
import { ServicioService } from '../servicio.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})

export class ConfirmacionComponent implements OnInit {
  datos= { 
    Nombre: ''
  };
  constructor(public s: ServicioService, private dataService: DataService) { }
  ngOnInit() {
    this.dataService.getDatos().subscribe((datos: any) => {
      this.datos = datos;
      console.log(datos);
    });
  }

  modificarDatos() {
    // Modificar datos según sea necesario
    this.datos.Nombre = 'Nuevo Nombre';

    // Guardar cambios haciendo una solicitud HTTP al servidor
    this.dataService.guardarDatos(this.datos).subscribe((respuesta) => {
      console.log('Datos guardados con éxito', respuesta);
    });
  }
}