import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile {

  student = {
    name: 'Chandana E R',
    usn: 'R24EF803',
    department: 'CSE',
    semester: 7,
    email: 'chandu@example.com'
  };

}