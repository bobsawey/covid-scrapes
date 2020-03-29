import {Component} from '@angular/core';
import  *  as  data  from  './data.json';

export interface Section {
  name: string;
  updated: Date;
}

export interface Results {
  title: string;
  abstract: string;
  url: string;
  metadata: string;
}
/**
 * @title List with sections
 */
@Component({
  selector: 'list-sections-example',
  styleUrls: ['list-sections-example.css'],
  templateUrl: 'list-sections-example.html',
})
export class ListSectionsExample implements OnInit {
boats: Results[] = [
   {
    abstract: "Green Bay Packers quarterback Aaron Rodgers used a private jet to escape Peru with just 15 minutes to spare before the airport was locked down due to the ...",
    metadata: "14 hours ago,",
    title: "Rodgers uses private jet to flee Peru amid COVID-19 panic",
    url: "https://sports.yahoo.com/rodgers-uses-private-jet-flee-peru-amid-covid-010748109--nfl.html"
  }];
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

 
}

 
/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */