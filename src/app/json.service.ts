import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class JsonService {
    constructor(private http: HttpClient) { }
  
    llenarArchivoJson(datos: any) {
      const rutaArchivo = 'assets/descargable.json';
  
      this.http.put(rutaArchivo, datos)
        .subscribe(() => {
          console.log('Archivo JSON creado con éxito.');
        }, error => {
          console.error('Error al crear el archivo JSON:', error);
        });
    }
  }