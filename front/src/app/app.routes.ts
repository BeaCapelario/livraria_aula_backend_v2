import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AutoresPage } from './pages/authors/authors.component';
import { PublisherComponent } from './pages/publisher/publisher.component';
import { BooksComponent } from './pages/books/books.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'autores', component: AutoresPage},
    {path: 'editoras', component: PublisherComponent},
    {path: 'livros', component: BooksComponent}
];
