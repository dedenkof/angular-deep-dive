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

  
	@ViewChildren(CourseCardComponent, {read: ElementRef}) cards: QueryList<ElementRef>;

  constructor() {
    //console.log("containerDiv", this.card);
  }

  ngAfterViewInit() {

		console.log(this.cards);
  }

  onCourseSelected(course: Course) {
    //console.log("containerDiv", this.card);
  }

}
