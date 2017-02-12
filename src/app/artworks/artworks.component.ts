import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {
  
pageTitle : string;
createdOn : number;
showImage : boolean;

  constructor() { }

  ngOnInit() {
  }

}
