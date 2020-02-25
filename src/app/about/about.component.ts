import { Component, OnInit } from '@angular/core';
import {AboutService} from '../services/about.service';
import {AboutInformation} from '../domains/aboutInformation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  allWorks: AboutInformation[];
  alleducation: AboutInformation[] ;
  allprojects: AboutInformation[] ;


  constructor(private AboutService: AboutService ) {
    this.allWorks = AboutService.getWorkInformation();
    this.alleducation = AboutService.getEducationInformation();
  }

  ngOnInit() {
  }

}
