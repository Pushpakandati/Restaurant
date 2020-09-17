import { Component, OnInit,Input } from '@angular/core';
import { RestaurantService } from './../../restaurant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-image-uploder',
  templateUrl: './image-uploder.component.html',
  styleUrls: ['./image-uploder.component.css'],
  inputs:['activeColor','baseColor','overlayColor']
})
export class ImageUploderComponent implements OnInit {

  activeColor: string = 'green';
    baseColor: string = '#ccc';
    overlayColor: string = 'rgba(255,255,255,0.5)';
    
    dragging: boolean = false;
    loaded: boolean = false;
    imageLoaded: boolean = false;
    imageSrc: string = '';
  constructor(private resService:RestaurantService,private router:Router) { }

  ngOnInit(): void {

  }
  handleDragEnter() {
    this.dragging = true;
}

handleDragLeave() {
    this.dragging = false;
}

handleDrop(e) {
    e.preventDefault();
    this.dragging = false;
    this.handleInputChange(e);
}

handleImageLoad() {
    this.imageLoaded = true;
}

handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
        alert('invalid format');
        return;
    }

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
}

_handleReaderLoaded(e) {
    var reader = e.target;
    this.imageSrc = reader.result;
    this.loaded = true;
    console.log(this.imageSrc)
  }
sendImage(){
  this.resService.setImagePath(this.imageSrc);
  this.router.navigate(['/photos']);
 }
}
