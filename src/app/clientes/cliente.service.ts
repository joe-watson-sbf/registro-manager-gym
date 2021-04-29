import { Injectable } from '@angular/core';
import { Cliente } from './Cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClienteService {
  private urlEndPoint: string = "http://localhost:8888/api/gimnasio/";

  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get<Cliente[]>(this.urlEndPoint + 'clientes');
  }

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.urlEndPoint +"cliente"}`, cliente);
  }

  getCliente(cedula:number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint +"cliente"}` + cedula);
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint +"cliente"}`, cliente);
  }

  delete(cedula: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint +"cliente/"}` + cedula);
  }
  
}
