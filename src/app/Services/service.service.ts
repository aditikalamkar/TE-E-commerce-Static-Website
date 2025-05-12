import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = "http://localhost:8080/signup"
  constructor(private http : HttpClient) { }
  saveData(FormData : any){
    return this.http.post(this.apiUrl,FormData)
  }

  private apiurl = "http://localhost:8080/login"
    getApiData (Data:any){
      return this.http.post<any[]>(this.apiurl,Data)
    }
}
