import { Component,OnInit,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-datos-medicos',
  templateUrl: './datos-medicos.component.html',
  styleUrls: ['./datos-medicos.component.css']
})
export class DatosMedicosComponent {
  medicosForm:FormGroup;

  ngOnInit(){

  }

  @HostBinding('style.display') display = 'block';
  constructor(private fb: FormBuilder, private router: Router){
    this.medicosForm = this.fb.group({
      
    })
  }

}
