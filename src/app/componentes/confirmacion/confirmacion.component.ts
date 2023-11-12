import { Component, HostBinding} from '@angular/core';
import { ServicioService } from '../servicio.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})

export class ConfirmacionComponent {
  @HostBinding('style.display') display = 'block';
  constructor(public s: ServicioService, private dataService: DataService,private router: Router) { }

  descargarArchivo() {
    this.dataService.obtenerDatosModificados().subscribe((datos) => {
      const jsonBlob = new Blob([JSON.stringify(datos)], { type: 'application/json' });
      const url = window.URL.createObjectURL(jsonBlob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      a.href = url;
      a.download = this.s.nombre+'_'+this.s.apellido+'_registro.json'; // Nombre del archivo
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
  volver(){
    this.display = 'none';
    this.router.navigate(['/home'])
  }
}