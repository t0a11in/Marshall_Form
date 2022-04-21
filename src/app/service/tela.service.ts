import { Injectable } from '@angular/core';
import { Tela } from '../model/tela.model';
import { requestHttp } from '../utilitarios/requestHttp';

@Injectable({
  providedIn: 'root'
})
export class TelaService {
  SERVICE_URL: string;
  constructor(
    private http: requestHttp) {
    this.SERVICE_URL = 'api/tela/';
  }
  list() {
    return this.http.get<Tela[]>(`${this.SERVICE_URL}`);
  }
}
