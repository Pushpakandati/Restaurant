import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './../../restaurant.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
 imgUrl:any;
  constructor(private resService:RestaurantService) { }

  ngOnInit(): void {
  	this.imgUrl=this.resService.getImagePath();
  	 console.log(this.resService.getImagePath(),'image');
  }

}
