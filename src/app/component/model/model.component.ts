import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';
import { RestaurantService } from './../../restaurant.service';
@Component({
    selector: 'app-model',
    templateUrl: './model.component.html',
    styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

    @Output() close = new EventEmitter<string>();
    contactForm: FormGroup;
    formObj:any;
    formInfo:any=[];
    constructor(private formBuilder: FormBuilder,private resService:RestaurantService) {
        this.createContactForm();
    }

    ngOnInit(): void {
      this.formInfo.push(this.contactForm.value)
     console.log(this.formInfo,'formInfo')
    }

    createContactForm(){
        this.contactForm = this.formBuilder.group({
          name: ['pushpa'],  
          location: ['tirupati'],
          number:['4'],
          message: ['Nicedish']
        });
      }

      onSubmit() {
          this.formObj=this.contactForm.value;
          this.resService.setFormData(this.formObj);
          console.log(this.formObj,'subObj')
      }
}

