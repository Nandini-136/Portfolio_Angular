import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent {

  experiences = [

    {
      company: 'Astralyt Softtech Pvt Ltd',
      role: 'Junior Software Developer',
      duration: 'Nov 2025 - Present',
      side: 'right',
      points: [
        'Developing responsive enterprise applications and management systems.',
        'Working on Farm Analytics project using React.js, JavaScript, Python APIs and MySQL.',
        'Developed modules for NDVI analysis, satellite monitoring and dashboards.',
        'Integrated Python REST APIs for real-time analytics.Implemented CRUD operations, maps and dynamic UI components.'
      ]
    },

    {
      company: 'Novius Technologies Pvt Ltd',
      role: 'Software Developer Intern',
      duration: 'Feb 2025 - Jul 2025',
      side: 'left',
      points: [
        'Worked on real-time full-stack development projects.',
        'Developed React.js frontend modules for Novius Business System.Enhanced UI, testing and debugging activities',
        'Worked with GitHub, Postman and VS Code .Collaborated with development teams following industry workflows.'
      ]
    }

  ];

}