import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Input() componentName:string;
  @Input() componentStatus:string;


  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.componentStatus;
  }

  getColor(){
    if(this.componentStatus === "Validé"){
      return 'green';
    } else if (this.componentStatus === "En cours"){
      return 'pink';
    }
  }

}
