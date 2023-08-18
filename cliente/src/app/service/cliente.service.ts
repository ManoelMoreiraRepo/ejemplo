import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../Model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  URL = 'http://localhost:8080/cliente/';

  constructor(private httpClient:HttpClient) { }

  public traer(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.URL+ 'traer');
  }

  public create(cliente: Cliente): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', cliente)
  }
}
