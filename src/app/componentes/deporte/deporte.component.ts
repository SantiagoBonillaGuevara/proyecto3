import { Component,OnInit,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deporte',
  templateUrl: './deporte.component.html',
  styleUrls: ['./deporte.component.css']
})
export class DeporteComponent {
  ngOnInit(): void {
    
  }
  @HostBinding('style.display') display = 'block';
  constructor(private router: Router){
  }
  irDatosPersonales(){
    this.display = 'none';
    this.router.navigate(['/datosPersonales'])
  }
}
