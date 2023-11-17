import { Component,OnInit,HostBinding} from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms'
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-arte',
  templateUrl: './arte.component.html',
  styleUrls: ['./arte.component.css']
})

export class ArteComponent implements OnInit {
arteForm:FormGroup; //se crea el formulario
fechaActual: string; //variable encargada de guardar la fecha actual

ngOnInit() {

}
  @HostBinding('style.display') display = 'block';

  o: string='';
  constructor(private fb: FormBuilder, private router: Router, private s: ServicioService){
    this.fechaActual = new Date().toISOString().split('T')[0];

    this.arteForm = this.fb.group({
      disciplina: ['', Validators.required],
      estilo: ['', Validators.required],
      experiencia: ['', Validators.required],
      objetivo: ['', Validators.required],
      materiales: ['', Validators.required],
      proyectosGrupo: ['', Validators.required],
      fecha: [this.fechaActual, Validators.required],
      horario: ['', Validators.required],
  });
  }

//metodo encargado de ir al formulario datos personales, unicamente cuando todos los campos obligatorios estan llenos
  irDatosPersonales(){
    //extraer datos de los inputs
    if(this.arteForm.valid){
      this.s.materiales=this.arteForm.value.materiales === 'si' ? 'si' : 'no'
      if(this.o==="si"){
        this.s.materiales="no";
      }

      this.s.clase = this.arteForm.value.disciplina
      this.s.fecha = this.arteForm.value.fecha;
  
      this.display = 'none';
      this.router.navigate(['/datosPersonales'])
      console.log("valores", this.arteForm.value)

    }
    else{
      alert("datos erroneos")
      console.log("valores", this.arteForm.value)
    }
  }
}
