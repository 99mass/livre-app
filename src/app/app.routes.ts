import { Routes } from '@angular/router';
import { LivreListeComponent } from './livre-liste/livre-liste.component';
import { LivreDetailsComponent } from './livre-details/livre-details.component';

export const routes: Routes =  [
    { path: '', component: LivreListeComponent },
    { path: 'livre/:id', component: LivreDetailsComponent }
  ];
