import { Component,OnInit,HostBinding} from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms'
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-deporte',
  templateUrl: './deporte.component.html',
  styleUrls: ['./deporte.component.css']
})
export class DeporteComponent {
 deporteForm!:FormGroup;//se crea el formulario
 fechaActual: string;//variable que se va a encargar de guardar la fecha actual
  ngOnInit(){
    
  }
  @HostBinding('style.display') display = 'block';

  constructor(private fb: FormBuilder, private router: Router, private s: ServicioService){
    this.fechaActual = new Date().toISOString().split('T')[0];

    this.deporteForm = this.fb.group({
      disciplina: ['', Validators.required],
      experiencia: ['', Validators.required],
      estatura: ['', Validators.required],
      peso: ['', Validators.required],
      experienciaPrevia: ['', Validators.required],
      objetivo: ['', Validators.required],
      lesiones: [''],
      talla: ['', Validators.required],
      fecha: [this.fechaActual, Validators.required],
      horario: ['', Validators.required],
    });

  }
  private radioButtonValidator() {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const value = control.value;
        if (value !== 'si' && value !== 'no') {
            return { 'invalidRadioButton': true };
        }
        return null;
  }
}
//metodo encargado de ir a formulario datos personales, unicamente cuando todos los datos estan correctamente diligenciados
  irDatosPersonales(){
    if(this.deporteForm.valid){
      //extraer datos de los inputs
      this.s.clase = this.deporteForm.value.disciplina
      this.s.fecha = this.deporteForm.value.fecha
      this.s.materiales="no";
  
      this.display = 'none';
      this.router.navigate(['/datosPersonales'])
      console.log("datos:", this.deporteForm.value)
    }
    else{
      alert("Error en el ingreso de los datos, verifique los campos")
      console.log("datos:", this.deporteForm.value)
    }
  }
}
