import { CardService } from './card.service';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {
  username:any;
  repo:any;
  constructor(private http:CardService) { }

  ngOnInit() {
   
  }


  getIssueList(){
    this.http.getGitApi(this.username,this.repo)
    .subscribe((res:any)=>{
      console.log(res)
    })
  }


}
