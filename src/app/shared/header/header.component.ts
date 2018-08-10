import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  imageSources: string[] = [];
  images: Array<string>;

  constructor(
  ) {
    this.setImageSources();
  }

  ngOnInit() {
    this.images = this._imageUrls();
    console.log(this._imageUrls());
  }

  private setImageSources() {
    for (let i = 1; i < 6; i++) {
      this.imageSources.push('../../assets/restaurant/background' + i + '.jpg');
    }

  }

  private _imageUrls(): Array<string> {
    const images = ['background1.jpg', 'background2.jpg', 'background3.jpg', 'background4.jpg', 'background5.jpg'];
    return ['background1.jpg', 'background2.jpg', 'background3.jpg', 'background4.jpg', 'background5.jpg'].map(
      (ele) => {
        const randomImage = ele;
        //console.log(Math.floor(Math.random() * images.length));
        return '../../assets/restaurant/' + randomImage;
      }
    );
  }

}
