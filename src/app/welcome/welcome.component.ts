import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  currentDate: string | null = null;

  ngOnInit() {
    // Get the current date
    const currentDateObj = new Date();
    // Convert the date to a string format
    this.currentDate = currentDateObj.toDateString();
  }
}
