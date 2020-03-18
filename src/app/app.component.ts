import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        callback: () => {
          resolve(date);
        }, ms: 2000,
      );
    }
  )
   
 x-3201
    

    titres = [
      {
        name: "Mon titre 1",
        status: "Validé"
      },
      {
        name: "Mon Titre 2",
        status: "En cours"
      },
      {
        name: "Mon titre 3",
        status: "Good"
      }
    ];

    title: string = 'Page Test ANGULAR';
     bouton: string = "Wesh";


  constructor() {
  }
  
  onActiver() {
   console.log(this.bouton);
  }
}
