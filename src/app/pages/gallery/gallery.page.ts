import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';




@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  public currentDate: any;

  constructor(
    public photoService: PhotoService,
    ) {  }


  ngOnInit() {
    this.photoService.loadSaved();
    this.currentDate =  new Date();
  }

}
