import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() product;
  imageIndex = 0;
  currentImageChange = function(imageNumber){
    this.imageIndex = imageNumber || 0;
  };
  constructor() { }

  ngOnInit() {
  	this.imageIndex = 0;
  }

}
