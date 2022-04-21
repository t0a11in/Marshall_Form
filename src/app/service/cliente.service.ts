import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente.model';
import { requestHttp } from '../utilitarios/requestHttp';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  SERVICE_URL: string;
  constructor(
    private http: requestHttp) {
    this.SERVICE_URL = 'api/cliente/';
  }
  list() {
    return this.http.get<Cliente[]>(`${this.SERVICE_URL}`);
  }
}
