import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Guess The Number Game';
  deviation: number;
  noOfTries: number;
  original: number;
  guess: number;

  constructor(){
    this.original = Math.floor((Math.random() * 1000) + 1);
      this.initializeGame();
  }
  
  initializeGame(){
    this.noOfTries = 0;
    this.original = Math.floor((Math.random() * 1000) + 1);
    this.guess = null;
    this.deviation = null;
  }
  
  verifyGuess(){
    this.deviation = this.original - this.guess;
    this.noOfTries = this.noOfTries + 1;
  }
}
