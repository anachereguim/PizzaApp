import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pizza } from 'src/app/models/pizza.model';
import { Observable } from 'rxjs';
import { Ingredients } from 'src/app/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private apiUrl = 'http://localhost:3000/pizzas';
  private apiUrlIng = 'http://localhost:3000/ingredientsList';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.apiUrl);
  }
  public getAllIngredients(): Observable<Ingredients[]> {
    return this.http.get<Ingredients[]>(this.apiUrlIng);
  }
  public getById(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.apiUrl}/${id}`);
  }

  public update(request: Pizza, id: number): Observable<Pizza> {
    return this.http.put<Pizza>(`${this.apiUrl}/${id}`, request);
  }

  public updateIng(request: Ingredients, id: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrlIng}/${id}`, request);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

