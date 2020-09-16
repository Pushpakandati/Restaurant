import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './../../restaurant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restaurantInfo:any;
  restaurantCloneData:any;
  restaurantObj:any;
  constructor(private resService:RestaurantService, private router: Router) { }

  ngOnInit(): void {
    this.restaurantData();
    
  }
  restaurantData(){
    this.resService.getRestaurantData().subscribe(data => {
      this.restaurantInfo=data;
      this.restaurantCloneData=Object.values(this.restaurantInfo)[0];
      console.log(this.restaurantCloneData,'restaurantCloneData')
      })
  }
  navigateToReview(val){
    this.restaurantObj=val;
    if(this.restaurantCloneData.indexOf(val)===(val.id)-1){
     this.resService.setRestaurantData(val);
      this.router.navigate(['/review']);
    }
  }

}
