import { Component } from '@angular/core';
import { ThemeProps } from '../Content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
