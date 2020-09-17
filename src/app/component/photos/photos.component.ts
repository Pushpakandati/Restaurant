import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './../../restaurant.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
 imgUrl:any;
 restaurantInfo:any;
 restaurantCloneData:any;
  constructor(private resService:RestaurantService) { }

  ngOnInit(): void {
  	this.restaurantData();
  	this.imgUrl=this.resService.getImagePath();
  	 console.log(this.resService.getImagePath(),'image');
  }
  restaurantData(){
    this.resService.getRestaurantData().subscribe(data => {
      this.restaurantInfo=data;
      this.restaurantCloneData=Object.values(this.restaurantInfo)[0];
      console.log(this.restaurantCloneData,'restaurantCloneData')
      })
  }
}
