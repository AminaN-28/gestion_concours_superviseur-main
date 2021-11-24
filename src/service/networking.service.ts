import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkingService {

  readonly BASE_URL = "http://127.0.0.1:5454/";

  private subject = new BehaviorSubject<any>("");
  adminData: any;

  constructor(private http: HttpClient) { }


  saveData(key: any, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: any): any {
    let data: any = localStorage.getItem(key);
    let object = JSON.parse(data);
    return object;
  }

  sendDataToAnotherComponent(data: any) {
    this.subject.next(data);
  }

  getDataSended(): Observable<any> {
    return this.subject.asObservable();
  }

  add(route: string, parametres: any): Observable<any> {
    return this.http.post(this.BASE_URL + route, parametres, { headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) })
  }

  update(route: string, parametres: any): Observable<any> {
    return this.http.put(this.BASE_URL + route, parametres, { headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) })
  }

  get(route: string): Observable<any> {
    console.log("ROUTE : " + this.BASE_URL + route);
    return this.http.get(this.BASE_URL + route, { headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) })
  }

  delete(route: string, id: any): Observable<any> {
    return this.http.delete(this.BASE_URL + route + "/" + id, { headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
  }
}
