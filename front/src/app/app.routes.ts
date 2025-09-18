import { Routes } from '@angular/router';
import { AutoresPage } from './pages/autores/autores.page';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  // Exemplo de rota protegida:
  { path: 'autores', component: AutoresPage, title: 'Autores', canActivate: [authGuard] },

  { path: '**', redirectTo: '' }
];
