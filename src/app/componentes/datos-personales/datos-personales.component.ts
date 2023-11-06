import { Component,OnInit,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  ngOnInit(): void {
    
  }
  @HostBinding('style.display') display = 'block';
  constructor(private router: Router){
  }
  irDatosMedicos(){
    this.display = 'none';
    this.router.navigate(['/datosMedicos'])
  }
}
