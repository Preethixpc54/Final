import { Injectable } from '@angular/core';
import { AboutDed } from '../Content';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getFeatures(DedalusType:string):string[]{
    return AboutDed[DedalusType];
  }
}