import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoas } from './models/Pessoas';

@Injectable({
  providedIn: 'root',
})
export class PessoasService {
  baseUrl = 'http://localhost:3333';

  constructor(private http: HttpClient) {}

  getPessoas(): Observable<Pessoas[]> {
    return this.http.get<Pessoas[]>(`${this.baseUrl}/pessoas`);
  }
  getPessoa(id: number) {
    return this.http.get<Pessoas>(`${this.baseUrl}/pessoas/:id`);
  }
  createPessoa(data:Pessoas): Observable<Pessoas> {
    return this.http.post<Pessoas>(`${this.baseUrl}/pessoas`, data);
  }
  removePessoas(id: number) {
    return this.http.delete<Pessoas>(`${this.baseUrl}/pessoas/id`);
  }
}
