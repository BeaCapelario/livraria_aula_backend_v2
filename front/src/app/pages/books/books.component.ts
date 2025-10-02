import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Livro } from '../../models/livro';
import { LivrosService } from '../../services/livros.services';

// export interface Livro{
//     id: Number;
//     titulo: string;
//     subtitulo: string;
//     autor: string;
//     editora: string;
//     isbn: string | null;
//     descricao: string;
//     idioma: string;
//     ano: Number;
//     paginas: Number;
//     preco: Number
//     estoque: Number;
//     desconto: Number;
//     disponivel: Number;
//     dimensoes: string
//     peso: Number
// }




@Component({
    standalone: true,
    imports: [RouterLink],
    template: `
      <section style="max-width:900px;margin:2rem auto;padding:0 1rem">
        <h1>Livros</h1>
  
        @if (carregando()) {
          <p>Carregando…</p>
        } @else if (erro()) {
          <p style="color:#c62828">{{ erro() }}</p>
        } @else {
          <ul style="padding-left:1.25rem">
            @for (a of livros(); track a.id) {
              <li style="margin:.25rem 0">
                <strong>{{ a.titulo }} {{ a.subtitulo}}</strong>
                @if (a.autor) { — <em style="color:#666">{{ a.autor}}</em> }
                @if (a.editora) { • {{ a.editora }} }
                @if (a.isbn) { <div style="color:#555">{{ a.isbn }}</div>}
                @if (a.descricao) { <div style="color:#555">{{ a.descricao }}</div>}
                @if (a.idioma) { <div style="color:#555">{{ a.idioma}}</div>}
                @if (a.ano) { <div style="color:#555">{{ a.ano}}</div>}
                @if (a.paginas) { <div style="color:#555">{{ a.paginas}}</div>}
                @if (a.preco) { <div style="color:#555">{{ a.preco}}</div>}
                @if (a.estoque) { <div style="color:#555">{{ a.estoque}}</div>}
                @if (a.desconto) { <div style="color:#555">{{ a.desconto}}</div>}
                @if (a.disponivel) { <div style="color:#555">{{ a.disponivel}}</div>}
                @if (a.dimensoes) { <div style="color:#555">{{ a.dimensoes}}</div>}
                @if (a.peso) { <div style="color:#555">{{ a.peso}}</div>}
              </li>
            }
          </ul>
        }
        <nav style="margin-top:1rem">
          <a routerLink="/">Voltar ao início</a>
        </nav>
      </section>
    `
  })
  export class LivrosPage {
    private svc = inject(LivrosService);
    private auth = inject(LivrosService);   //Ver o token
    livros = signal<Livro[]>([]);
    carregando = signal(true);
    erro = signal<string | null>(null);
  
    constructor() {
      this.svc.listar().subscribe({
        next: (data) => { this.livros.set(data); this.carregando.set(false); },
        error: () => { this.erro.set('Falha ao carregar livros'); this.carregando.set(false); }
      });
    }
  }