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
	ContentChildren,
	AfterContentInit,
	QueryList,
	TemplateRef,
} from "@angular/core";
import { Course } from "../model/course";
import { CommonModule } from "@angular/common";
import { CardImgComponent } from "../card-img/card-img.component";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  imports: [CommonModule],
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {
  //	@Input() cardIndex: number;
  //	@Input({required: true}) index: number;
  //  @ContentChild("courseImage") image;
  //	@ContentChild('container') image;

  @Input() course: Course;

  @Input() cardIndex: number;

	@Input() noImageTpl: TemplateRef<any>;

  @Output() courseSelected = new EventEmitter<Course>();

//   @ContentChild(CardImgComponent, { read: ElementRef }) image: ElementRef; // ElementRef {nativeElement: card-img}

	// @ContentChild(CardImgComponent) image: CardImgComponent; // _CardImgComponent {__ngContext__: 2, imageUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png'}

	@ContentChildren(CardImgComponent, {read: ElementRef}) images:QueryList<CardImgComponent>;


  constructor() {}

  ngAfterViewInit() {
    //console.log(this.image);
  }


	ngAfterContentInit() {
			// console.log(this.images);

			console.log(this.noImageTpl);
	}

  ngOnInit() {}

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViwed() {
    this.courseSelected.emit(this.course);
  }
}
