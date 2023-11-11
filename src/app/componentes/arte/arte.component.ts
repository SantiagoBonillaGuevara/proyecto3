import { Component,OnInit,HostBinding, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
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
  constructor(private fb: FormBuilder, private router: Router, private el: ElementRef, private s: ServicioService){
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
    //extraer datos de los inputs
    this.s.materiales="si";
    if(this.o==="si"){
      this.s.materiales="no";
    }
    const c = (this.el.nativeElement.querySelector('#disciplina') as HTMLSelectElement);
    this.s.clase = c.options[c.selectedIndex].text;
    this.s.fecha = (this.el.nativeElement.querySelector('#fecha') as HTMLInputElement).value;

    this.display = 'none';
    this.router.navigate(['/datosPersonales'])
  }
}
