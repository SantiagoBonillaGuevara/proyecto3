import { Component,OnInit,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent {
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
