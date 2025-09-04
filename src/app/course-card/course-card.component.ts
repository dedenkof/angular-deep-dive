import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"]
})
export class CourseCardComponent implements OnInit{

	constructor (){}

	@Input() course: Course;

	@Input({required: true}) index: number;

	@Output() courseSelected = new EventEmitter<Course>();

	onCourseViwed () {	
		this.courseSelected.emit(this.course);
	}

	ngOnInit () {}
}
