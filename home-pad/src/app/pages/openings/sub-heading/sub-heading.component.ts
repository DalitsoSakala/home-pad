import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-heading',
  templateUrl: './sub-heading.component.html',
  styleUrls: ['./sub-heading.component.scss']
})
export class SubHeadingComponent implements OnInit {
  @Input() text: string=''
  @Input() logo: string=''
  constructor() { }

  ngOnInit(): void {
  }

}
