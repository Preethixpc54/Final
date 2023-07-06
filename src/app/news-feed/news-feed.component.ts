import { Component, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent {
  NewsDes:string=""
   boxtitle:string=""
   date:string=""
   image:string=""
   response: any[] = [];
   DedalusType:string[]=["About","Company","Services"];
  constructor(private ds:NewsService){

      }
  ngOnInit(): void {
   
    this.ds.getNews().subscribe(
      { 
        next:(response:any)=>{
          alert(response.length)
          this.response = response;
         },

         error:()=>{
        
         }}
    )
  }
  
  
  }
  

