import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../Model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  [x: string]: any;
  URL = 'http://localhost:8080/cliente/';

  constructor(private httpClient: HttpClient) { }

  public traer(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.URL + 'traer');
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `detail/${id}`);
  }

  public create(cliente: Cliente): Observable<any> {
    return this.httpClient.post(this.URL + `create`, cliente, { responseType: 'text' });
  }

  public detail(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.URL + `detail/${id}`);
  }

  // public actualizar(id: number, cliente: Cliente): Observable<any> {
  //   console.log("onupdate", cliente);
  //   return this.httpClient.put<any>(this.URL + `actualizar/${id}`, Cliente);

  // }
  
  public actualizar(id: number, cliente: Cliente): Observable<any> {
    console.log('onupdate', cliente);
    return this.httpClient.put(this.URL + `actualizar/${id}`, cliente, { responseType: 'text' });
  }
}
