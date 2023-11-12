import { Component,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-datos-medicos',
  templateUrl: './datos-medicos.component.html',
  styleUrls: ['./datos-medicos.component.css']
})
export class DatosMedicosComponent {
  medicosForm:FormGroup;
  
  @HostBinding('style.display') display = 'block';
  constructor(private fb: FormBuilder, private router: Router){
    this.medicosForm = this.fb.group({
      eps: ['', Validators.required],
      sangre: ['', Validators.required],
      alergias: [''],
      discapacidades: [''],
      enfermedadesCronicas: [''],
      haTenidoCirugia: ['', Validators.required],
      lesionesPrevias: [''],
      vacunasCovid: ['', Validators.required],
      nombresApellidos: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]*')]] 
    })
  }
  irConfirmacion(){
    this.display = 'none';
    this.router.navigate(['/confirmacion'])
  }
}
