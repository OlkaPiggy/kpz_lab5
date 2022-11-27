import { Component, OnInit } from '@angular/core';
import {HotelsService} from "./hotels.service";
import {Hotel} from "./hotel";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  public hotels!: Hotel[];

  constructor(
    private hotelService: HotelsService,
  ) {
  }

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe((data) => this.hotels = data);
  }
}
