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

  constructor() {
   
  }
  
  title = 'zipari';

  selectedMinValue: number = 0;
  selectedMaxValue: number = 15;
  selectedNumberOfCards: number = 1;
  cardsFiltered:  Card[] = [];
  cardsToDisplay:  Card[] = [];

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
    {value: 4, suit: "Spade", srcImage: "assets/4_of_spades.png"},

    {value: 5, suit: "Club", srcImage: "assets/5_of_clubs.png"},
    {value: 5, suit: "Diamond", srcImage: "assets/5_of_diamonds.png"},
    {value: 5, suit: "Heart", srcImage: "assets/5_of_hearts.png"},
    {value: 5, suit: "Spade", srcImage: "assets/5_of_spades.png"},

    {value: 6, suit: "Club", srcImage: "assets/6_of_clubs.png"},
    {value: 6, suit: "Diamond", srcImage: "assets/6_of_diamonds.png"},
    {value: 6, suit: "Heart", srcImage: "assets/6_of_hearts.png"},
    {value: 6, suit: "Spade", srcImage: "assets/6_of_spades.png"},

    {value: 7, suit: "Club", srcImage: "assets/7_of_clubs.png"},
    {value: 7, suit: "Diamond", srcImage: "assets/7_of_diamonds.png"},
    {value: 7, suit: "Heart", srcImage: "assets/7_of_hearts.png"},
    {value: 7, suit: "Spade", srcImage: "assets/7_of_spades.png"},

    {value: 8, suit: "Club", srcImage: "assets/8_of_clubs.png"},
    {value: 8, suit: "Diamond", srcImage: "assets/8_of_diamonds.png"},
    {value: 8, suit: "Heart", srcImage: "assets/8_of_hearts.png"},
    {value: 8, suit: "Spade", srcImage: "assets/8_of_spades.png"},

    {value: 9, suit: "Club", srcImage: "assets/9_of_clubs.png"},
    {value: 9, suit: "Diamond", srcImage: "assets/9_of_diamonds.png"},
    {value: 9, suit: "Heart", srcImage: "assets/9_of_hearts.png"},
    {value: 9, suit: "Spade", srcImage: "assets/9_of_spades.png"},

    {value: 10, suit: "Club", srcImage: "assets/10_of_clubs.png"},
    {value: 10, suit: "Diamond", srcImage: "assets/10_of_diamonds.png"},
    {value: 10, suit: "Heart", srcImage: "assets/10_of_hearts.png"},
    {value: 10, suit: "Spade", srcImage: "assets/10_of_spades.png"},

    {value: 11, suit: "Club", srcImage: "assets/jack_of_clubs.png"},
    {value: 11, suit: "Diamond", srcImage: "assets/jack_of_diamonds.png"},
    {value: 11, suit: "Heart", srcImage: "assets/jack_of_hearts.png"},
    {value: 11, suit: "Spade", srcImage: "assets/jack_of_spades.png"},

    {value: 12, suit: "Club", srcImage: "assets/queen_of_clubs.png"},
    {value: 12, suit: "Diamond", srcImage: "assets/queen_of_diamonds.png"},
    {value: 12, suit: "Heart", srcImage: "assets/queen_of_hearts.png"},
    {value: 12, suit: "Spade", srcImage: "assets/queen_of_spades.png"},

    {value: 13, suit: "Club", srcImage: "assets/king_of_clubs.png"},
    {value: 13, suit: "Diamond", srcImage: "assets/king_of_diamonds.png"},
    {value: 13, suit: "Heart", srcImage: "assets/king_of_hearts.png"},
    {value: 13, suit: "Spade", srcImage: "assets/king_of_spades.png"},

    {value: 14, suit: "Club", srcImage: "assets/ace_of_clubs.png"},
    {value: 14, suit: "Diamond", srcImage: "assets/ace_of_diamonds.png"},
    {value: 14, suit: "Heart", srcImage: "assets/ace_of_hearts.png"},
    {value: 14, suit: "Spade", srcImage: "assets/ace_of_spades.png"},



  ]

  changeChipState(selectedFilter: Filter) {
    selectedFilter.selected = !selectedFilter.selected;
    this.updateFilteredCards();
    this.cardsToDisplay = [];
  }

  updateFilteredCards(){
    this.cardsFiltered = [];
    this.cardsToDisplay = [];
    this.filters.forEach(filter => {
      this.cards.forEach(card => {
        if (filter.selected) {
          if(card.suit === filter.name && card.value >= this.selectedMinValue  && card.value <= this.selectedMaxValue) {
            this.cardsFiltered.push(card)
          }
        }
      })
    })
  }

  draw(){
    this.cardsToDisplay = [];
    for (let i = 0; i < this.selectedNumberOfCards; i++) {
          let rndCcard = this.cardsFiltered[Math.floor(Math.random()*this.cardsFiltered.length)];
          this.cardsToDisplay.push(rndCcard);
          for (let i = 0; i < this.cardsFiltered.length; i++) {
            if (this.cardsFiltered[i].value === rndCcard.value && this.cardsFiltered[i].suit === rndCcard.suit){
              this.cardsFiltered.splice(i,1);
            }
          }       
       
    }
    this.resetFilters();
  }

  private resetFilters(){
    this.filters.forEach(filter => {
      filter.selected = false;    
    });
    this.selectedMinValue = 0;
    this.selectedMaxValue = 15;
    this.selectedNumberOfCards = 1;
    this.cardsFiltered = [];
  }

}


