import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  @Input()
  public rating: number;

  @Input()
  public id: string;

  @Output()
  public ratingUpdated: EventEmitter<number> = new EventEmitter<number>();

  public ratings: boolean[] = [false, false, false, false, false];

  constructor() { }

  ngOnInit(): void {
    this.updateRating(this.rating);
  }

  public updateRating(index: number) {
    for (let i = 0; i < this.ratings.length; i++) {
      if (i <= index) {
        this.ratings[i] = true;
      } else {
        this.ratings[i] = false;
      }
    }

    this.ratingUpdated.next(index);
  }

}
