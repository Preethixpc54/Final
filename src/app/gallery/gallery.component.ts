import { Component, Input } from '@angular/core';
import { ThemeProps } from '../Content';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  @Input() backgroundColor!: string;
  @Input() boxtheme:ThemeProps={color:"",backgroundColor:""}
}
