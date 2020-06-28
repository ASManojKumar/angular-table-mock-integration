import { Component, ViewEncapsulation } from '@angular/core';
import { MockapiService } from './services/mockapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'conviva-task';
  user_details: Array<object>;
  address_details: Array<object>;

  constructor(private mockService: MockapiService) { }

  ngOnInit() {
    this.mockService.getUserDetails().subscribe(response => {
      this.user_details = response;
    });
  }

  fetchInduvidualDetails(id: number) {
    this.mockService.getAddressDetails(id).subscribe((response: any) => {
      this.address_details = response;
    });
  }
}
