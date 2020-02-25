import { Injectable } from '@angular/core';
import {AboutInformation} from '../domains/aboutInformation';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() {

  }


  works: AboutInformation []= [
    {
      field_1: 'Junior Developer',
      field_2: 'Ubuntu Tech Foundation',
      field_3:'Oct. 2019- Present',
      href: 'www.opower.sl'
    },

    {
      field_1: 'Tracking Coordinator',
      field_2: 'Flash Vehicles',
      field_3:'Oct. 2017- September ',
      href: 'www.flashvehicles.com'
    },

    {
      field_1: 'University of Makeni',
      field_2: 'Research Teaching Assistant',
      field_3:'May. 2016-2017 October ',
      href: 'www.unimak.edu.sl'
    },

    {
      field_1: 'National Social Security and Insurance Trust NASSIT',
      field_2: 'IT Intern',
      field_3:'August. 2014-2014 October ',
      href: 'www.unimak.edu.sl'
    },

    {
      field_1: 'Defence for Children',
      field_2: 'IT Support Volunteer',
      field_3:'May. 2016-2017 October ',
      href: 'www.unimak.edu.sl'
    }
  ];

  education: AboutInformation []= [
    {
      field_1: 'Univerisity of Makeni',
      field_2: 'Bachelor of Science In Information Technology',
      field_3:'Oct. 2011- Dec. 2016',
      href: 'www.unimak.edu.sl'
    },

    {
      field_1: 'Holy Family Schools',
      field_2: 'WASSCE & BECE',
      field_3:'Oct. 2019- Present',
      href: 'www.waec.com'
    }
  ];


  getWorkInformation(): AboutInformation[]{
    return this.works;
  }

  getEducationInformation(): AboutInformation[] {
    return this.education;
  }

}
