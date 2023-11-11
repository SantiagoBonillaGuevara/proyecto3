import { Component,OnInit,HostBinding, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  ngOnInit(): void {
    
  }
  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private el: ElementRef, private s:ServicioService) {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      genero: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      identificacion: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      municipio: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }
  @HostBinding('style.display') display = 'block';
  irDatosMedicos(){
    //extraer datos de los inputs
    this.s.nombre = (this.el.nativeElement.querySelector('#nombre') as HTMLInputElement).value;
    this.s.apellido = (this.el.nativeElement.querySelector('#apellido') as HTMLInputElement).value;
    this.s.identificacion = (this.el.nativeElement.querySelector('#identificacion') as HTMLInputElement).value;
    this.s.correo = (this.el.nativeElement.querySelector('#correo') as HTMLInputElement).value;
    this.s.telefono = (this.el.nativeElement.querySelector('#telefono') as HTMLInputElement).value;


    this.display = 'none';
    this.router.navigate(['/datosMedicos'])
  }
}
