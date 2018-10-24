import { Component } from '@angular/core';
import { dropDown } from './dropDown';
import { Filter } from './models/filter';
import { Card } from './models/card';

@Component({
  selector: 'zipari-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zipari';

  selectedMinValue: number;
  selectedMaxValue: number;
  selectedNumberOfCards: number;

  filters : Filter[] = [
    {name: "Spade", selected: false},
    {name: "Heart", selected: false},
    {name: "Club", selected: false},
    {name: "Diamond", selected: false}
  ];

  ddCards: dropDown[] = [
    {value: 2, viewValue: '2'},
    {value: 3, viewValue: '3'},
    {value: 4, viewValue: '4'},
    {value: 5, viewValue: '5'},
    {value: 6, viewValue: '6'},
    {value: 7, viewValue: '7'},
    {value: 8, viewValue: '8'},
    {value: 9, viewValue: '9'},
    {value: 10, viewValue: '10'},
    {value: 11, viewValue: 'Jack'},
    {value: 12, viewValue: 'Queen'},
    {value: 13, viewValue: 'King'},
    {value: 14, viewValue: 'Ace'},
  ];

  cards: Card[] = [
    {value: 2, suit: "Club", srcImage: "assets/2_of_clubs.png"},
    {value: 2, suit: "Diamond", srcImage: "assets/2_of_diamonds.png"},
    {value: 2, suit: "Heart", srcImage: "assets/2_of_hearts.png"},
    {value: 2, suit: "Spade", srcImage: "assets/2_of_spades.png"},

    {value: 3, suit: "Club", srcImage: "assets/3_of_clubs.png"},
    {value: 3, suit: "Diamond", srcImage: "assets/3_of_diamonds.png"},
    {value: 3, suit: "Heart", srcImage: "assets/3_of_hearts.png"},
    {value: 3, suit: "Spade", srcImage: "assets/3_of_spades.png"},

    {value: 4, suit: "Club", srcImage: "assets/4_of_clubs.png"},
    {value: 4, suit: "Diamond", srcImage: "assets/4_of_diamonds.png"},
    {value: 4, suit: "Heart", srcImage: "assets/4_of_hearts.png"},
    {value: 4, suit: "Spade", srcImage: "assets/4_of_spades.png"}

  ]
}


