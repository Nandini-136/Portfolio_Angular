import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {

 skills = [
  { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
  { name: 'ReactJS', icon: 'devicon-react-original colored' },
  { name: 'NodeJS', icon: 'devicon-nodejs-plain colored' },
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
  { name: 'Material UI', icon: 'devicon-materialui-plain colored' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },

  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
{ name: 'DBMS', icon: 'devicon-azuresqldatabase-plain colored' },
  { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
  { name: 'Hibernate', icon: 'devicon-hibernate-plain colored' },

  { name: 'Linux', icon: 'devicon-linux-plain colored' },
  { name: 'VS Code', icon: 'devicon-vscode-plain colored' },

  { name: 'Postman', icon: 'devicon-postman-plain colored' },

  { name: 'WordPress', icon: 'devicon-wordpress-plain colored' },


];
}