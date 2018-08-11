import { Component, OnInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  images: Array<string>;

  constructor(slideConfig: NgbCarouselConfig) {
    slideConfig.interval = 4000;
    slideConfig.wrap = true;
    slideConfig.pauseOnHover = false;
    slideConfig.showNavigationArrows = false;
    slideConfig.showNavigationIndicators = false;
  }

  ngOnInit() {
    this.images = this._imageUrls();
  }

  private _imageUrls(): Array<string> {
    const images = [
      "background1.jpg",
      "background2.jpg",
      "background3.jpg",
      "background4.jpg",
      "background5.jpg"
    ];
    return images.map(ele => {
      const randomImage = ele;
      return "../../assets/restaurant/" + randomImage;
    });
  }
}
