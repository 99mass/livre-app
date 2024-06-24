import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LivreService } from '../livre.service';

@Component({
  selector: 'app-livre-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="livre">
      <h2>{{ livre.volumeInfo.title }}</h2>
      <p>Auteur(s): {{ livre.volumeInfo.authors?.join(', ') }}</p>
      <p>Description: {{ livre.volumeInfo.description }}</p>
      <img [src]="livre.volumeInfo.imageLinks?.thumbnail" alt="Couverture du livre">
    </div>
  `,
  styleUrls: ['./livre-details.component.css']
})
export class LivreDetailsComponent implements OnInit {
  livre: any;

  constructor(
    private route: ActivatedRoute,
    private livreService: LivreService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.livreService.getLivreDetails(id).subscribe(
        (data: any) => {
          this.livre = data;
        },
        error => {
          console.error('Erreur lors de la récupération des détails du livre:', error);
        }
      );
    }
  }
}