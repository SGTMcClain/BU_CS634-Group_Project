import { Component, OnInit } from '@angular/core';

import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  albums: Album[] = [
            {
              'id': '',
              'name': '',
              'details': '',
            },
            {
              'id': 'bb2',
              'name': 'Backwards Books 2',
              'details': 'October 2018 finally saw the release of the sequel to Backward Books. Remaining true to his roots, going after the anime album cover and containing at least one song that mentions the Grim Reaper, Backward Books 2 will not disappoint. The album will be loved by everyone from vaporwave fanatics to hardcore hip-hopper.'},
            {
              'id': 'xen',
              'name': 'Xenophile',
              'details': 'The much-awaited Xenophile dropped in August of 2018. His love for foreign cultures (a self-proclaimed xenophile) played into the naming of this album. Featuring several previously released singles and a total of 11 songs, this album shows off Azizi’s artistic range. A great display of his creativity. You are sure to find something you love!'},
            {
              'id': 'bb',
              'name': 'Backwards Books',
              'details': 'Released in August of 2014, this album was created during Azizi’s time with Brainfeeder. Containing 11 songs that introduce us to the real Azizi and his pension for everything from anime to good times, this album delves into the depths of staying true to oneself'
            }
  ];

  selectedAlbum: any;

  selectChangeHandler(event: any){
    // console.log(event.target);
    this.selectedAlbum = event.target.value;
  }

  constructor() {}

  ngOnInit() {
  }

}
