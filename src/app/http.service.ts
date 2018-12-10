
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  // token:8e98b189caf79facfdc7c7fb47b6aec7b4996729

  public httpconfig = {

    baseUrl: "https://api.github.com",

    header: {
      headers: new HttpHeaders({
        'Authorization': sessionStorage.getItem('token') ? sessionStorage.getItem('token') : ''
      })
    }
  };

  setHeaders = () => {
    this.httpconfig.header.headers = new HttpHeaders({
      Authorization: sessionStorage.getItem("token")
        ? sessionStorage.getItem("token")
        : ""
    });
  };
  clearHeader() {
    this.httpconfig.header.headers = new HttpHeaders({
      Authorization: ""
    });
  }
    get(endUrl: string) {
      return this.http
        .get(this.httpconfig.baseUrl + endUrl, this.httpconfig.header)
        .pipe(catchError(err=>{
          console.log(this.httpconfig.header)
          return Observable.throw(err);
        }));
    }
  

}
