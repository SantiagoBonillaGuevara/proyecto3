import { Component,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent {
  deporteForm!:FormGroup;
  fechaActual: string;
  @HostBinding('style.display') display = 'block';
  constructor(private fb: FormBuilder, private router: Router){
    this.fechaActual = new Date().toISOString().split('T')[0];

    this.deporteForm = this.fb.group({
      clase: ['', Validators.required],
      experiencia: ['', Validators.required],
      modalidad: ['', Validators.required],
      instrumentoPropio: ['', Validators.required],
      generoPreferido: ['', Validators.required],
      interes: ['', Validators.required],
      dispuesto: ['', Validators.required],
      gubernamentales: ['', Validators.required],
      fecha: [this.fechaActual, Validators.required]
    });
  }
  irDatosPersonales(){
    this.display = 'none';
    this.router.navigate(['/datosPersonales'])
  }
}
