import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Course } from "../model/course";
import { CommonModule } from '@angular/common';

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
	imports: [CommonModule]
})
export class CourseCardComponent implements OnInit{

	constructor (){}

	@Input() course: Course;

	@Input() cardIndex: number;

	@Output() courseSelected = new EventEmitter<Course>();

	onCourseViwed () {	
		this.courseSelected.emit(this.course);
	}

	cardClasses() {
		//return {'beginner': this.course.category == 'BEGINNER'}
		if(this.course.category == 'BEGINNER') {
			//return ['beginner'];
			return 'beginner';
		}
	}

	ngOnInit () {}
}
