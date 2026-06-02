import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {

  projects = [

    {
      title: 'PPE Detection System',
      image: 'images/PPE.png',
      description: 'AI-based PPE detection system that identifies safety helmets, vests and protective equipment using computer vision.',
      github: 'https://github.com/novius-nandini/PPE-Detection.git'
    },

    {
      title: 'AES Cryptographic Tool',
      image: 'images/AES.png',
      description: 'Desktop application implementing AES encryption and decryption for secure data protection.',
      github: 'https://github.com/Nandini-136/AES-Cryptograohic-tool.git'
    },

    {
      title: 'Todo Application',
      image: 'images/ToDo.png',
      description: 'Task management application with CRUD operations and responsive user interface.',
      github: 'https://github.com/Nandini-136/todo-repo.git'
    },

    {
      title: 'TOU TOD',
      image: 'images/tou.png',
      description: 'Web-based task organizer with user-friendly dashboard and productivity features.',
      github: 'https://github.com/Nandini-136/TOU_TOD_.git'
    },

    {
      title: 'Chemical Management',
      image: 'images/chemical.png',
      description: 'Full Stack Java project for managing chemicals, inventory, suppliers and production workflows.',
      github: 'https://github.com/Nandini-136/_ChemicalManagement_JavaFullStack.git'
    },

    {
      title: 'Landing Page',
      image: 'images/landing.png',
      description: 'Modern responsive landing page developed using HTML, CSS and JavaScript.',
      github: 'https://github.com/Nandini-136/landingpage.git'
    }

  ];
}