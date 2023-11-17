import { Component,OnInit,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-datos-medicos',
  templateUrl: './datos-medicos.component.html',
  styleUrls: ['./datos-medicos.component.css']
})
export class DatosMedicosComponent {
  medicosForm:FormGroup; //se crea el formulario
  ngOnInit(){

  }
  @HostBinding('style.display') display = 'block';
  //constructor de la clase, en el se realizan las verificacion de los inputs del formulario de datos medicos
  constructor(private fb: FormBuilder, private router: Router){
    this.medicosForm = this.fb.group({
      //se verifica unicamente los campos que no son obligatorios
      eps: ['', Validators.required],
      sangre: ['', Validators.required],
      alergia: [''],
      discapacidades: [''],
      enfermedadesCronicas: [''],
      cirugia: ['', Validators.required],
      lesionesPrevia: [''],
      vacunas: ['', Validators.required],
      nombreApellido: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]*')]] 
    })
  }
//metodo que envía el formulario, unicamente cuando todos los campos estan correctamente diligenciados
  irConfirmacion(){
    if(this.medicosForm.valid){
      this.display = 'none';
      this.router.navigate(['/confirmacion'])
      console.log("datos:", this.medicosForm.value)
    }
    else{
      alert("datos incorrectos o incompletos")
      console.log("datos:", this.medicosForm.value)
    }
  }
}
