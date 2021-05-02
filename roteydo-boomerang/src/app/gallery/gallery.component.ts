import { Component } from '@angular/core';
import { IAlbum, Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  albums: IAlbum[] = [
    {
      src: '../../assets/img/gallery/3DGoOut.jpg',
      thumb: '../../assets/img/gallery/3DGoOut.jpg'
    },
    {
      src: '../../assets/img/gallery/BlueSpace.jpg',
      thumb: '../../assets/img/gallery/BlueSpace.jpg'
    },
    {
      src: '../../assets/img/gallery/Cangaroo.jpg',
      thumb: '../../assets/img/gallery/Cangaroo.jpg'
    },
    {
      src: '../../assets/img/gallery/FireDust.jpg',
      thumb: '../../assets/img/gallery/FireDust.jpg'
    },
    {
      src: '../../assets/img/gallery/ForteDynamicPeople.jpg',
      thumb: '../../assets/img/gallery/ForteDynamicPeople.jpg'
    },
    {
      src: '../../assets/img/gallery/PeterPan.jpg',
      thumb: '../../assets/img/gallery/PeterPan.jpg'
    },
    {
      src: '../../assets/img/gallery/Positron.jpg',
      thumb: '../../assets/img/gallery/Positron.jpg'
    },
    {
      src: '../../assets/img/gallery/SnowBoomerangs.jpg',
      thumb: '../../assets/img/gallery/SnowBoomerangs.jpg'
    },
    {
      src: '../../assets/img/gallery/SnowPeak.jpg',
      thumb: '../../assets/img/gallery/SnowPeak.jpg'
    },
    {
      src: '../../assets/img/gallery/Sunshine.jpg',
      thumb: '../../assets/img/gallery/Sunshine.jpg'
    },
    {
      src: '../../assets/img/gallery/Symmetric.jpg',
      thumb: '../../assets/img/gallery/Symmetric.jpg',
    },
    {
      src:  '../../assets/img/gallery/BoomerangMaking.jpg',
      thumb:  '../../assets/img/gallery/BoomerangMaking.jpg'
    }
  ]
  
  constructor(private lightbox: Lightbox) {

  }

  openImage(index: number) {
    this.lightbox.open(this.albums, index, {
      wrapAround: true,
      centerVertically: true,
      showImageNumberLabel: true
    });
  }
}
