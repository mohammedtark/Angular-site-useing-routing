import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  [key: string]: any;
  userNameLabel: boolean = false;
  userAgeLabel: boolean = false;
  userEmailLabel: boolean = false;
  userPasswordLabel: boolean = false;

  onInputChange(event: any, label: string) {
    this[label] = !!event.target.value;
  }
}
