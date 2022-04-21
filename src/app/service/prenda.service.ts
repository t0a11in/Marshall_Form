import { Injectable } from '@angular/core';
import { Prenda } from '../model/prenda.model';
import { requestHttp } from '../utilitarios/requestHttp';

@Injectable({
  providedIn: 'root'
})
export class PrendaService {

  SERVICE_URL: string;
  constructor(
    private http: requestHttp) {
    this.SERVICE_URL = 'api/prenda/';
  }
  list() {
    return this.http.get<Prenda[]>(`${this.SERVICE_URL}`);
  }
  save(prenda: Prenda) {
    return this.http.post<Prenda>(`${this.SERVICE_URL}`, prenda);
  }
}
