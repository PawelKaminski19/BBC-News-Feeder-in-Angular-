import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentCategory: String;

  categoryUpdate(currentCategory){
  	this.currentCategory = currentCategory;
  	
  }
}
