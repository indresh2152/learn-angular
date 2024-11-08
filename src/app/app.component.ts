import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'learn-angular';

  getDenominations(bill: number, denominations: any) {
    let remainder = bill;
    let sortedDenominations = denominations.sort(this.compare);

    let numberOfNotes = 0
    if (sortedDenominations.indexOf(remainder) > -1) {
      numberOfNotes = 1;
    } else {
      sortedDenominations?.forEach( (item: number) => {
        if (item <= remainder) {
          const quotient = Math.floor(remainder/item); 
          remainder = remainder%item;
          numberOfNotes += quotient;
        }
      });
    }
    return numberOfNotes;
  }

  // Below compare function will sort in descending order
  compare(a: number, b: number) {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  }
}
