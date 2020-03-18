import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Input() componentName:string;
  @Input() componentStatus:string;
  
  
  boutonActif = "Bouton activé";

  constructor() { }

  ngOnInit(): void {
  }
  getStatus(){
   return this.componentStatus;
  }
  
  
}
