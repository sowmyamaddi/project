import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userform(value: any) {
    throw new Error('Method not implemented.');
  }
  private _url="https://localhost:8080";

  constructor(private _http:HttpClient) { }
  //get
  public getUser():Observable<any>
  {
    return this._http.get(`${this._url} gets`);
  }
  //post
  public addUser(data:any):Observable<any>
  {
    return this._http.post(`${this._url}inserted`,data);
  }
  //delete
  public deletUser(id:string):Observable<any>
  {
    return this._http.delete(`${this._url}delete/${id}`,{responseType:'text'});
  }
  //update
  public updateUser(id:string,data:any):Observable<any>
  {
    return this._http.put(`${this._url}update /${id}`,data);
  }
}
