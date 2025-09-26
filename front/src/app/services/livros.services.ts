import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro';
import { environments } from '../../environments/environments';

@Injectable({ providedIn: 'root' })
export class LivrosService {
  private http = inject(HttpClient);
  private base = environments.apiBase;
  
  listar(): Observable<Livro[]> {
    const url = `${this.base}api/editoras`;
    return this.http.get<Livro[]>(url);
  }
}
