import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes'; // Nous utiliserons l'API Google Books

  constructor(private http: HttpClient) { }

  rechercheLivres(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${query}`);
  }

  getLivreDetails(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}