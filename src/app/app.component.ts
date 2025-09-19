import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { CourseCardComponent } from "./course-card/course-card.component";
import { COURSES } from "src/db-data";
import { Course } from "./model/course";
import { CommonModule } from "@angular/common";

// Просто запустіть цю команду у вашому проекті, і більшість вашого коду буде прозоро перетворено на новий синтаксис.
// ng g @angular/core:control-flow

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  imports: [CourseCardComponent, CommonModule],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  //@ViewChild(CourseCardComponent) card1: CourseCardComponent;

  //@ViewChild("cardRef", { read: ElementRef }) card: CourseCardComponent;

  // @ViewChild('container') containerDiv: ElementRef;

  //@ViewChild("courseImage") courseImage: ElementRef;
  
	@ViewChildren(CourseCardComponent, {read: ElementRef}) cards: QueryList<ElementRef>;

  constructor() {
    //console.log("containerDiv", this.card);
  }

  ngAfterViewInit() {

		// this.cards.changes.subscribe(
		// 	cards => console.log(cards)
		// );

		console.log(this.cards);


    //console.log("courseImage", this.courseImage);
    //console.log(this.cards.first);
  }

  onCourseSelected(course: Course) {
    //console.log("containerDiv", this.card);
  }

	onCoursesEdited() {
		this.courses.push({
        id: 1,
        description: "Angular Core Deep Dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
    }
	)
	}

  // startDate = new Date(2025, 9, 5);

  // title = COURSES[0].description;

  // price = 9.996587989;

  // rate = 0.67;

  // course = COURSES[0];

  // tracking loop for function insert into for track instead course.id (not use our example not suit on)
  // trackCourse(index:number, course:Course) {
  // 	return course.id;
  // }
}
