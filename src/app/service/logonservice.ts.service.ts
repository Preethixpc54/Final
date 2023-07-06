import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogonserviceTsService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    })
  };

  constructor(  private http: HttpClient) { }

  check(str:any):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
                
        })
    }
   return this.http.get("http://localhost:4500/users?UserName"+str,this.httpOptions);
 }
}
