import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './../../restaurant.service';
import {ModalService} from './../../modal.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  ResReviewObj:any;
  formReviewObj:any;
  openModel:boolean=false;

  constructor(private resService:RestaurantService,private modalService: ModalService) { }

  ngOnInit(): void {
    this.resReviewInfo();
    this.formInfo();
  }
  resReviewInfo(){
  this.ResReviewObj=this.resService.getResData();
  console.log(this.ResReviewObj,'staticReviews');
  }
  openModal(id: string) {
    this.openModel=true;
  }

 closeModal(id: string) {
  this.openModel=false;
  }
  formInfo(){
    this.formReviewObj=this.resService.getFormData();
    console.log(this.formReviewObj,'reviewFromFormsub')
  }
}
