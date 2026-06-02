import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  roles = [
    'Web Design',
    'Software Development',
    'Frontend Development',
    'Backend Development'
  ];

  currentRole = signal('Web Design');

  index = 0;

  constructor() {

    setInterval(() => {

      this.index =
        (this.index + 1) %
        this.roles.length;

      this.currentRole.set(
        this.roles[this.index]
      );

    }, 1500);

  }
}