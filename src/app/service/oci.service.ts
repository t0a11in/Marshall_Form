import { Injectable } from '@angular/core';
import { Oci } from '../model/oci.model';
import { requestHttp } from '../utilitarios/requestHttp';

@Injectable({
  providedIn: 'root'
})
export class OciService {
  SERVICE_URL: string;
  constructor(
    private http: requestHttp) {
    this.SERVICE_URL = 'api/oci/';
  }

  list() {
    return this.http.get<Oci[]>(`${this.SERVICE_URL}`);
  }

}
