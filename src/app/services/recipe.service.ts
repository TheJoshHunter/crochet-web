import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recipe } from '../models/recipe.model';

const baseUrl = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  get(id: string): Observable<Recipe> {
    return this.http.get(`${baseUrl}/api/v1/recipe/${id}`)
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/vi/recipe/create`, data)
  }

  update(id: string, data:any): Observable<any> {
    return this.http.post(`${baseUrl}/api/v1/recipe/${id}`, data)
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/api/v1/recipe/${id}`);
  }
}
