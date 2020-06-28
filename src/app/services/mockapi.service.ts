import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MockapiService {

  userDetails: Array<object> = [
    { name: 'Rahul', age: 21 },
    { name: 'Ankit', age: 23 },
    { name: 'Shyam', age: 19 },
    { name: 'Kumar', age: 22 },
    { name: 'Vinod', age: 21 },
    { name: 'Pravin', age: 35 }
  ];

  addressDetailsId1: Array<object> = [
    { address: 'XXX, yyy, zzz' },
    { address: 'XXX, yyy, zzz' },
    { address: 'XXX, yyy, zzz' }
  ];

  addressDetailsId2: Array<object> = [
    { address: 'AAA, bbb, ccc' }
  ];

  addressDetailsId3: Array<object> = [
    { address: 'DDD, eee, fff' },
    { address: 'DDD, eee, fff' }
  ];

  addressDetailsId4: Array<object> = [];

  addressDetailsId5: Array<object> = [
    { address: 'KKK, lll, mmm' },
    { address: 'KKK, lll, mmm' },
    { address: 'KKK, lll, mmm' },
    { address: 'KKK, lll, mmm' }
  ];

  constructor() { }

  getUserDetails() {
    return of(this.userDetails);
  }

  getAddressDetails(id?: number) {
    switch (id) {
      case 1:
        return of(this.addressDetailsId1);
      case 2:
        return of(this.addressDetailsId2);
      case 3:
        return of(this.addressDetailsId3);
      case 4:
        return of(this.addressDetailsId4);
      case 5:
        return of(this.addressDetailsId5);
      default:
        return of(this.addressDetailsId1);
    }
  }
}
