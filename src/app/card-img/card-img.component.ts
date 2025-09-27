import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "card-img",
  imports: [],
  templateUrl: "./card-img.component.html",
  styleUrl: "./card-img.component.css",
})
export class CardImgComponent implements OnInit {
  ngOnInit() {
    //console.log(this.imageUrl);
  }

  @Input('src') imageUrl: string;

  ngAfterViewInit() {
    //console.log("Image url", this.imageUrl);
  }
}
