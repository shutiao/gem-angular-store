import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() product;
 
  constructor() { }

  ngOnInit() {
  	this.imageIndex = 0;
	this.currentImageChange = function(imageNumber){
		this.imageIndex = imageNumber || 0;
		};
  }

}
