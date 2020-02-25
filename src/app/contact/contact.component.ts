import { Component, OnInit } from '@angular/core';
import {Contact} from '../domains/contact';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contacts = [
  new Contact('augustinematturi@outlook.com', 'mailto:augustinematturi@outlook.com', 'email', 'envelope'),
  new Contact('augustinematturi@outlook.com', 'https://twitter.com/asymatturi','twitter', 'twitter'),
  new Contact('augustinematturi@outlook.com', 'https://www.linkedin.com/augustine-matturi','linkedin', 'linkedin'),
  new Contact('augustinematturi@outlook.com', 'https://www.linkedin.com/augustine-matturi','instagram', 'instagram'),

];

  constructor(private contact: ContactService) {

  }

  ngOnInit() {
  }

}
