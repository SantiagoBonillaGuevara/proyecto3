import { Component,OnInit,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  ngOnInit(): void {
    
  }
  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
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
    if (this.formulario.valid) {
      this.display = 'none';
      this.router.navigate(['/datosMedicos'])
    } else {
      alert("verifique los campos")
    }
  }
}
