import { Component } from '@angular/core';
import { dropDown } from './dropDown';
import { Filter } from './models/filter';

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

  cards: dropDown[] = [
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
    {value: '9', viewValue: '9'},
    {value: '10', viewValue: '10'},
    {value: '11', viewValue: 'Jack'},
    {value: '12', viewValue: 'Queen'},
    {value: '13', viewValue: 'King'},
    {value: '14', viewValue: 'Ace'},

  ];
}


