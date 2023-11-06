import { Component,OnInit,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-arte',
  templateUrl: './arte.component.html',
  styleUrls: ['./arte.component.css']
})
export class ArteComponent implements OnInit {
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
