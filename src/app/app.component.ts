import { Component } from "@angular/core";
import { CourseCardComponent } from "./course-card/course-card.component";
import { COURSES } from "src/db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  imports: [CourseCardComponent],
})
export class AppComponent {
  onCourseSelected(course: Course) {
    console.log('Card clicked!', course);
  }

	courses = COURSES;

	// tracking loop for function insert into for track instead course.id (not use our example not suit on)
	// trackCourse(index:number, course:Course) {
	// 	return course.id;
	// }
}
