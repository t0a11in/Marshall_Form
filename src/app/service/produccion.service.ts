import { Injectable } from '@angular/core';
import { Produccion } from '../model/produccion';
import { requestHttp } from '../utilitarios/requestHttp';

@Injectable({
  providedIn: 'root'
})
export class ProduccionService {
  SERVICE_URL: string;
  constructor(
    private http: requestHttp) {
    this.SERVICE_URL = 'api/produccion/';
  }
  list() {
    return this.http.get<Produccion[]>(`${this.SERVICE_URL}`);
  }
}
