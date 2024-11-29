import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  imports: [CommonModule],
  styleUrls: ['./carousel.component.css'],
})

export class CarouselComponent implements OnInit {
  images = [
    { src: 'assets/images/Versace.png', alt: 'Versace Logo' },
    { src: 'assets/images/ZaraLogo.png', alt: 'Zara Logo' },
    { src: 'assets/images/GucciLogo.png', alt: 'Gucci Logo' },
    { src: 'assets/images/Pradalogo.png', alt: 'Prada Logo' },
    { src: 'assets/images/CalvKleinlogo.png', alt: 'Calvin Klein Logo' },
  ];

  currentIndex = 0;
  interval: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Adjust the duration as needed
  }

  getTransformStyle() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
