import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class EducationComponent {

  educationList = [
    {
      degree: 'B.Tech in Computer Engineering',
      institute: 'MIT Academy of Engineering, Pune',
      score: 'CGPA: 8.0',
      duration: 'December 2021 - July 2025',
      status: 'Completed',
      image: 'images/MIT.png'
    },
    {
      degree: 'HSC - Maharashtra State Board',
      institute: 'Upadhye College of Science, Nashik',
      score: '80.00%',
      duration: 'March 2020 - June 2021',
      status: 'Completed',
      image: 'images/HSC.png'
    },
    {
      degree: 'SSC - Maharashtra State Board',
      institute: 'Janata Vidyalaya, Pavannagar, Nashik',
      score: '91.20%',
      duration: 'March 2018 - June 2019',
      status: 'Completed',
      image: 'images/SSC.png'
    }
  ];

}