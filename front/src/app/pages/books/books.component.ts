import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LivrosService } from '../../services/livros.services';
import { Livro } from '../../models/livro';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-books.component',
  imports: [RouterLink],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  private svc = inject(LivrosService);
    private auth = inject(AuthService);   //Ver o token
    editoras = signal<Livro[]>([]);
    carregando = signal(true);
    erro = signal<string | null>(null);
  
    constructor() {
        this.svc.listar().subscribe({
        next: (data) => { this.editoras.set(data); this.carregando.set(false); },
        error: () => { this.erro.set('Falha ao carregar editoras'); this.carregando.set(false); }
      });
    }
}
