import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  roles = [
    'Web Design',
    'Software Development',
    'Frontend Development',
    'Backend Development'
  ];

  currentRole = 'Web Design';

  private intervalId: any;
  index = 0;

  ngOnInit(): void {

    this.intervalId = setInterval(() => {

      this.index = (this.index + 1) % this.roles.length;

      this.currentRole = this.roles[this.index];

      console.log(this.currentRole);

    }, 1500);

  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}