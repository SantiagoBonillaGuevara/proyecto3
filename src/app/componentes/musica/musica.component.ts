import { Component,HostBinding, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms'
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent {
  musicaForm:FormGroup;
  fechaActual: string;

  ngOnInit() {

  }

  @HostBinding('style.display') display = 'block';

  constructor(private fb: FormBuilder, private router: Router, private el: ElementRef, private s: ServicioService){
    this.fechaActual = new Date().toISOString().split('T')[0];

    this.musicaForm = this.fb.group({
      clase: ['', Validators.required],
      experiencia: ['', Validators.required],
      modalidad: ['', Validators.required],
      instrumentoPropio: ['', Validators.required],
      generoPreferido: ['', Validators.required],
      interes: ['', Validators.required],
      dispuesto: ['', Validators.required],
      gubernamentales: ['', Validators.required],
      fecha: [this.fechaActual, Validators.required]
    });
  }
  irDatosPersonales(){
    //extraer datos de los inputs
    if(this.musicaForm.valid){
      this.s.materiales = this.musicaForm.value.instrumentoPropio === 'SI' ? 'No' : 'Si'
      
      const c = (this.el.nativeElement.querySelector('#clase') as HTMLSelectElement);
      this.s.clase = this.musicaForm.value.clase;
      this.s.fecha = this.musicaForm.value.fecha;
  
      this.display = 'none';
      this.router.navigate(['/datosPersonales'])
      console.log("datos", this.musicaForm.value)
    }
    else{
      alert("Los datos ingresados no son correctos")
      console.log("datos", this.musicaForm.value)
    }
  }
}
