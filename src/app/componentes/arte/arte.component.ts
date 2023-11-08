import { Component,OnInit,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

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
  //metodo constructor, donde se realiza las verficaciones del formulario Arte
  constructor(private fb: FormBuilder, private router: Router){
    //se extrae la fecha del dia actual, para validar que el usuario no pueda elegir una fecha anterior
    this.fechaActual = new Date().toISOString().split('T')[0];

    this.arteForm = this.fb.group({
      disciplina: ['', Validators.required],
      estilo: ['', Validators.required],
      experiencia: ['', Validators.required],
      objetivo: ['', Validators.required],
      materiales: ['', Validators.required],
      proyectosEnGrupo: ['', Validators.required],
      fecha: [this.fechaActual, Validators.required],
      horario: ['', Validators.required]
    });
  }
//metodo encargado de ir al formulario datos personales, unicamente cuando todos los campos obligatorios estan llenos
  irDatosPersonales(){
    if(this.arteForm.valid){
      this.display = 'none';
      this.router.navigate(['/datosPersonales'])
    }
    else{ //si no, le avisa al usuario que hay un error en el formulario 
      alert("Por favor, verificar que cada campo este correctamento llenado")
    }
  }
}
