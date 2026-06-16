import { Component } from '@angular/core';

import { NavbarComponent } from './navbar/navbar';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { SkillsComponent } from './skills/skills';
import { EducationComponent } from './education/education';
import { ProjectsComponent } from './projects/projects';
import { ExperienceComponent } from './experience/experience';
import { ContactComponent } from './contact/contact';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}