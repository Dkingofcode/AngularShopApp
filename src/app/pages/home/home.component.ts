import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
//import { CarouselComponent } from "../../shared/carousel/carousel.component";
//import { CarouselComponent } from '../../shared/carousel/carousel.component';
//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
