import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  baseUrl = "https://api.spacexdata.com/v3/launches?limit=100";
  finalUrl=""
  constructor(private http:HttpClient) { }

  getData(append?:string){
    this.finalUrl = this.baseUrl+append
    return this.http.get(this.finalUrl);
  }

}
