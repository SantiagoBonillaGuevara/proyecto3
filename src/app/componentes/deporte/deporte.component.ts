import { Component,OnInit,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-deporte',
  templateUrl: './deporte.component.html',
  styleUrls: ['./deporte.component.css']
})
export class DeporteComponent {
 deporteForm!:FormGroup;//se crea el formulario
 fechaActual: string;//variable que se va a encargar de guardar la fecha actual
  ngOnInit(): void {
    
  }
  @HostBinding('style.display') display = 'block';
  //metodo constructor, donde se realizan las validaciones del formualrio Deporte
  constructor(private fb: FormBuilder, private router: Router){
    //se extrae la fecha actual, para que el usuario no pueda elegir una fecha anterior a la actual
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
      fecha: [this.fechaActual, Validators.required],
      horario: ['', Validators.required],
    });
  }
//metodo encargado de ir a formulario datos personales, unicamente cuando todos los datos estan correctamente diligenciados
  irDatosPersonales(){
    if(this.deporteForm.valid){
      this.display = 'none';
      this.router.navigate(['/datosPersonales'])
    }
    else{
      alert("Ingrese correctamente todos los datos obligatorios")
    }
  }
}
