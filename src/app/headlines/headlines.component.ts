import { Component, OnInit, Input } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {
	@Input() currentCategory : String; 
	resources: any;
  	constructor(private http: HttpClient ) {}

  

	ngOnChanges(changes) {
		if(this.currentCategory != undefined) {
		this.http.get("https://newsapi.org/v2/top-headlines?sources=" + this.currentCategory + "&apiKey=48b3a8173fc6498083381f1e13a92568").subscribe(data => {
      this.resources = data.articles;

    });
	 }
	}

}
