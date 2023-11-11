import { Component,HostBinding, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent {
  deporteForm!:FormGroup;
  fechaActual: string;
  @HostBinding('style.display') display = 'block';
  constructor(private fb: FormBuilder, private router: Router, private el: ElementRef, private s: ServicioService){
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
    //extraer datos de los inputs
    this.s.materiales="Si";
    if((this.el.nativeElement.querySelector('#instrumentoPropio') as HTMLSelectElement).value==="SI"){
      this.s.materiales="No"
    }
    const c = (this.el.nativeElement.querySelector('#clase') as HTMLSelectElement);
    this.s.clase = c.options[c.selectedIndex].text;
    this.s.fecha = (this.el.nativeElement.querySelector('#fecha') as HTMLInputElement).value;

    this.display = 'none';
    this.router.navigate(['/datosPersonales'])
  }
}
