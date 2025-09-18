// src/main.ts
import 'zone.js'; // necessário para Angular rodar com Zone.js
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { App } from './app/app';          // seu componente raiz standalone
import { routes } from '../src/app/app.routes'; // suas rotas

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(), // opcional; remova se não usar animações
  ],
}).catch(err => console.error(err));
