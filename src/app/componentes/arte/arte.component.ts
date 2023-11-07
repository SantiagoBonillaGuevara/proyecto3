import { Component,OnInit,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-arte',
  templateUrl: './arte.component.html',
  styleUrls: ['./arte.component.css']
})

export class ArteComponent implements OnInit {
arteForm!:FormGroup;
fechaActual: string;

ngOnInit() {

}
  @HostBinding('style.display') display = 'block';
  constructor(private fb: FormBuilder, private router: Router){
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

  irDatosPersonales(){
    this.display = 'none';
    this.router.navigate(['/datosPersonales'])
  }
}
