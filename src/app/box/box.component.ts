import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent  {
  features:string[]=[]
  @Input("title") boxtitle:string=""
  constructor(private ds:DataService){

      }
  ngOnInit(): void {
    this.features=this.ds.getFeatures(this.boxtitle)
  }
  
  

  
}
