import { Component } from '@angular/core';
import { ThemeProps } from './Content';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dedalus';
  DedalusType:string[]=["About","Company","Services"];
  colors = ['blue', 'yellow', 'orange', 'purple'];
  themeStyles: ThemeProps[]=[

    {backgroundColor:"skyblue",color:"whitesmoke"},

    {backgroundColor:"green",color:"#whitesmoke"},

    {backgroundColor:"yellow",color:"#F7F9F9"},

    {backgroundColor:"red",color:"#F7F9F9"},
]
currentTheme:ThemeProps=this.themeStyles[0]
}




