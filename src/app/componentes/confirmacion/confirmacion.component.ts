import { Component} from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent {
  constructor(public s:ServicioService){}
}
