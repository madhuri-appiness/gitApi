import { HttpService } from './../http.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpService) { }

    getGitApi(user,repo){
    return this.http.get(`/repos/${user}/${repo}/issues/`)
  }
}
