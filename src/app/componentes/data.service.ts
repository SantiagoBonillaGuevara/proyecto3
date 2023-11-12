import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'assets/datos.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) {}

  getDatos() {
    return this.http.get(this.url);
  }
  guardarDatos(datos: any) {
    // Enviar una solicitud HTTP al servidor para guardar los cambios
    // Puedes usar un método PUT o POST dependiendo de tu API
    return this.http.put('url_del_servidor', datos);
  }
}
