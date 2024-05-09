import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '../interfaces/Fornecedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarService {



  private url = "http://localhost:3004/fornecedores"
  constructor(private http: HttpClient) { }

  fornecedores: Fornecedor[] = []

  httpHeader = {
    headers: {
      "content-Type": "application/json"
    }
  };

  listar(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.url) as Observable<Fornecedor[]>;
  }

  post(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.url, fornecedor, this.httpHeader);
  }

  buscarPorId(id: string): Observable<Fornecedor> {
    const url = `${this.url}/${id}`;
    return this.http.get(url) as Observable<Fornecedor>;
  }

  excluir(id: string) {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  editar(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.put<Fornecedor>(`${this.url}/${fornecedor.id}`, fornecedor, this.httpHeader);
  }

}
