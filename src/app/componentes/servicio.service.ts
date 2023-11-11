import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  public nombre: string = '';
  public apellido: string = '';
  public identificacion: string = '';
  public telefono: string = '';
  public correo: string = '';
  public clase: string = '';
  public fecha: string = '';
  public materiales: string='';
}
