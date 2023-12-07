import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  courses : any;

  constructor(service: CoursesService){ // dependecny injection 
    // creating a instance for courses.service in variable called service 
    // let service = new CoursesService();
    // now all the data availble in courses.service we able to access with service 
    // through that service we are getting the getCourses method and assign that to Courses in courseComponent 
    this.courses = service.getCourses();
  }
}
