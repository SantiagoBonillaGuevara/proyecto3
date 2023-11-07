import { Component,OnInit,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

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
  constructor(private fb: FormBuilder, private router: Router){
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
    this.display = 'none';
    this.router.navigate(['/datosPersonales'])
  }
}
