import { Component } from '@angular/core';

import { NavbarComponent } from './navbar/navbar';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { SkillsComponent } from './skills/skills';
import { EducationComponent } from './education/education';
import { ProjectsComponent } from './projects/projects';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}