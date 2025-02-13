import { Component, OnInit, Input, Attribute, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private sources = []; 
  
  @Output()  currentCategory: EventEmitter = new EventEmitter<any>();

  constructor() {
	this.sources =  [
   						{ title: "CBC News",  src: "cbc-news" },
   						{ title: "The New York Times",  src: "the-new-york-times" },
   						{ title: "BBC Sport",  src: "bbc-sport" },
   						{ title: "The New York Times",  src: "the-new-york-times" }
  				 	];
  
  				 
  }

  ngOnInit() {
  	
  }
  emitNavigation(e){
  	this.currentCategory.emit(e.srcElement.getAttribute('currentcategory'));
  }
}
