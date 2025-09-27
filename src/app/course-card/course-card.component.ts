import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  AfterViewInit,
  ContentChild,
  ElementRef,
} from "@angular/core";
import { Course } from "../model/course";
import { CommonModule } from "@angular/common";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  imports: [CommonModule],
})
export class CourseCardComponent implements OnInit, AfterViewInit {
  //	@Input() cardIndex: number;
  //	@Input({required: true}) index: number;
  @ContentChild("courseImage") image;
  //	@ContentChild('container') image;

  @Input() course: Course;

  @Input() cardIndex: number;

  @Output() courseSelected = new EventEmitter<Course>();

  //@ContentChild(CourseImageComponent, { read: ElementRef }) image: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    console.log(this.image);
  }

  ngOnInit() {}

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViwed() {
    this.courseSelected.emit(this.course);
  }
}
