import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-openings',
  templateUrl: './openings.component.html',
  styleUrls: ['./openings.component.scss']
})
export class OpeningsComponent implements OnInit {

  angular=false
  flutter=false
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.pipe().subscribe((ob) => {
      let name = ob.get('name')?.toLowerCase().trim()??''
      switch(name){
        case 'flutter':this.flutter=true;break;
        case 'angular':this.angular=true
      }
    })
  }

}
