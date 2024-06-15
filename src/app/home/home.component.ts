import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href')?.substring(1);
        const targetSection = document.getElementById(targetId || '');

        if (targetId && targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }
}
