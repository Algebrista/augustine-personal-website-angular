import { Injectable } from '@angular/core';
import {Contact} from '../domains/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contact: Contact;
  contacts: Contact[];

  constructor() {
    this.contacts = [
      {name: 'augustinematturi@outlook.com', hrefLink: 'mailto:augustinematturi@outlook.com', app: 'email', icon: 'envelop'},
      {name: 'augustinematturi@outlook.com', hrefLink: 'mailto:augustinematturi@outlook.com', app: 'twitter', icon: 'twitter'}

    ]
  }
}
