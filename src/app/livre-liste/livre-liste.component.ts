import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-livre-liste',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div>
      <input [(ngModel)]="query" placeholder="Rechercher des livres">
      <button (click)="rechercheLivres()">Rechercher</button>
    </div>
    <ul>
      <li *ngFor="let livre of livres">
        <a [routerLink]="['/livre', livre.id]">{{ livre.volumeInfo.title }}</a>
      </li>
    </ul>
  `,
  styleUrls: ['./livre-liste.component.css']
})
export class LivreListeComponent implements OnInit {
  livres: any[] = [];
  query: string = '';

  constructor(private livreService: LivreService) { }

  ngOnInit(): void {
    this.rechercheLivres();
  }

  rechercheLivres() {
    if (this.query) {
      this.livreService.rechercheLivres(this.query).subscribe(
        (data: any) => {
          this.livres = data.items;
        },
        error => {
          console.error('Erreur lors de la recherche de livres:', error);
        }
      );
    }
  }
}