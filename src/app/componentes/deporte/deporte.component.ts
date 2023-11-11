import { Component,OnInit,HostBinding, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-deporte',
  templateUrl: './deporte.component.html',
  styleUrls: ['./deporte.component.css']
})
export class DeporteComponent {
 deporteForm!:FormGroup;
 fechaActual: string;
  ngOnInit(): void {
    
  }
  @HostBinding('style.display') display = 'block';
  constructor(private fb: FormBuilder, private router: Router, private el: ElementRef, private s: ServicioService){
    this.fechaActual = new Date().toISOString().split('T')[0];

    this.deporteForm = this.fb.group({
      disciplina: ['', Validators.required],
      experiencia: ['', Validators.required],
      estatura: ['', Validators.required],
      peso: ['', Validators.required],
      experiencia_previa: ['', Validators.required],
      objetivo: ['', Validators.required],
      lesiones: [''],
      talla: ['', Validators.required],
      fecha: [this.fechaActual, Validators.required]
    });
  }
  irDatosPersonales(){
    //extraer datos de los inputs
    const c = (this.el.nativeElement.querySelector('#disciplina') as HTMLSelectElement);
    this.s.clase = c.options[c.selectedIndex].text;
    this.s.fecha = (this.el.nativeElement.querySelector('#fecha') as HTMLInputElement).value;
    this.s.materiales="no";

    this.display = 'none';
    this.router.navigate(['/datosPersonales'])
  }
}
