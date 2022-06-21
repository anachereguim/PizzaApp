import { Injectable } from '@angular/core';
import { Img } from 'src/app/models/img.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'http://localhost:3000/img'

  constructor(private http: HttpClient) { }

  public getAllimg(): Observable<Img[]> {
    return this.http.get<Img[]>(this.apiUrl);
  }
}
