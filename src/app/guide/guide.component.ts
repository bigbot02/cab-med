import { Component } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent {
  slides = [
    { imageUrl: 'assets/guide01.PNG', description: 'You can access your notifications easily and track all your activities.' },
    { imageUrl: 'assets/guide02.PNG', description: 'In Appointment you can find all your appointment of the day, with patients names and informations, feel free to add a new appoitement, just in case.' },
    { imageUrl: 'assets/guide03.PNG', description: 'Just fill the necessery informations, choose the month and week you are free in and simply select the time you find compatible.' },
    { imageUrl: 'assets/guide04.PNG', description: 'You can simply access the medical records of your patients before your appointment with them.' },
    { imageUrl: 'assets/guide05.PNG', description: 'You can even add a new medical record of one of your patients, Modify it or even delete it.' },
    { imageUrl: 'assets/guide06.PNG', description: 'You can aslo access to all previous prescription you gave to that patient or even add more if needed.' },


    // Add more slides as needed
  ];

  currentSlideIndex = 0;

  get currentSlide() {
    return this.slides[this.currentSlideIndex];
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
}
