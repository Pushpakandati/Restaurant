import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
  resData:any=[];
  formData:any=[];
  imgPath:any=[];
  createFormData:any=[];

  constructor(private httpService: HttpClient) {
    console.log(this.getFormData(),'returnFormObj')
   }

  getRestaurantData(): Observable<any>{
    return this.httpService.get('./assets/restaurant.json');
  }
  setRestaurantData(val){
    this.resData.push(val)
  }
  getResData(): Observable<any>{
    return this.resData;
  }
  setFormData(val){
    this.formData.push(val);
  }
  getFormData(){
    return this.formData;
  }
  setImagePath(val){
    this.imgPath.push(val);
  }
  getImagePath(){
    return this.imgPath;
  }
}

