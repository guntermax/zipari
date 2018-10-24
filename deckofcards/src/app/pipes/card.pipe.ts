import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../models/card';
import { Filter } from '../models/filter';

@Pipe({
  name: 'card'
})
export class CardPipe implements PipeTransform {

  transform(cards: Card[], filters : Filter[] ): any {
    return null;
  }

  // export class ChipPipe implements PipeTransform {
  //   transform(cards:any[], selectedFilteId: number, shipmentStatus : any): Card[] {
     
  //     if(selectedFilteId === 1) {
  //       return cards.filter((card) => card.shipmentStatus == shipmentStatus.status);
  //     }
  //     return cards.filter((card) => card.filterId === selectedFilteId  && card.shipmentStatus == shipmentStatus.status );
  //   }
  // }

}
