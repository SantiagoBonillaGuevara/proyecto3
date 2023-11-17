import { Component,OnInit,HostBinding} from '@angular/core';
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
  datosForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private s:ServicioService) {
    this.datosForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(10), Validators.max(100)]],
      genero: ['', Validators.required],
      tipoDocumento: ['', [Validators.required,Validators.maxLength(10)]],
      identificacion: ['', Validators.required],
      telefono: ['', [Validators.required,Validators.maxLength(10)]],
      correo: ['', [Validators.required, Validators.email]],
      municipio: ['', Validators.required],
      direccion: ['', [Validators.required, Validators.maxLength(15)]],
    });
  }

  @HostBinding('style.display') display = 'block';
  irDatosMedicos(){
    if(this.datosForm.valid){
      //extraer datos de los inputs
      this.s.nombre = this.datosForm.value.nombre
      this.s.apellido = this.datosForm.value.apelido
      this.s.identificacion = this.datosForm.value.identificacion
      this.s.correo = this.datosForm.value.correo
      this.s.telefono = this.datosForm.value.telefono
  
      this.display = 'none';
      this.router.navigate(['/datosMedicos'])
      console.log("datos:",this.datosForm.value)
    }
    else{
      alert("datos incorrectos")
      console.log("datos:",this.datosForm.value)
    }
  }
}
