import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PortprojectService {
  private basePath='https://localhost:44310/api/port'; 

  constructor(private http: HttpClient) { }
  public getport():Observable<any>{
    return this.http.get(this.basePath);
}
}
