import { Component, OnInit } from '@angular/core';

interface ICategory{
  name:string
  about:string
  link?:string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pastProjects:Array<ICategory>=[]
  currentOpenings:Array<ICategory>=[]
  constructor() { }

  ngOnInit(): void {
    this.pastProjects=[
      {name:'Document Web',about:'A web base document generator'},
    ]
    this.currentOpenings=[
      {name:'Mobile Dev',about:'Mobile App Development using Flutter',link:'flutter'},
      {name:'Angular Web',about:'Front end web development using the angular framework',link:'angular'},
    ]
  }

}
