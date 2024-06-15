import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  ngOnInit(): void {
    this.setDefaultDate();
  }

  setDefaultDate(): void {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because getMonth returns zero-based month
    const week = Math.ceil(now.getDate() / 7); // Calculating the week of the month

    // Setting the default value of the date input
    const dateInput = document.getElementById("date") as HTMLInputElement;
    dateInput.value = year + '-W' + month + '-' + week;
  }
}
