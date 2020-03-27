import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent {
  result: string;
  counter: number = 10;
  flag: boolean = true;
  timeFlag: boolean;
  level: number;
  wantedNumbers = [];
  zmienna0: number;
  zmienna1: number;
  zmienna2: number;
  zmienna3: number;
  zmienna4: number;
  zmienna5: number;
  zmienna6: number;
  zmienna7: number;
  zmienna8: number;
  zmienna9: number;
  isRunning: boolean;
  enteredNumbers = [this.zmienna0, this.zmienna1, this.zmienna2, this.zmienna3, this.zmienna4, this.zmienna5, this.zmienna6, this.zmienna7, this.zmienna8, this.zmienna9];



  onClickMe() {
    let intervalX;
    this.result = "";
    this.counter = 10;
    this.timeFlag = false;
    this.wantedNumbers = [];
    this.enteredNumbers = [];
    this.timeCounter(intervalX);

    console.log(this.getRandomNumberBetween());
    console.log(this.generateNumber(this.level));
  }

  generateNumber(times: number) {
    for (let i = 0; i < times; i++) {
      this.wantedNumbers[i] = this.getRandomNumberBetween();
    }
    return this.wantedNumbers;
  }

  getRandomNumberBetween(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  timeCounter(intervalX) {
    if (!this.isRunning) {
      this.isRunning = true;
      intervalX = setInterval(() => {
        this.counter = this.counter - 1;
        console.log(this.counter)
        if (this.counter <= 0) {
          clearInterval(intervalX);
          this.timeFlag = true;
          this.isRunning = false;
        }
      }, 1000)
    } else {
      clearInterval(intervalX);
    }
  }


  onClickResult() {
    this.flag = true;

    for (let i = 0; i < this.level; i++) {
      if (this.wantedNumbers[i] != this.enteredNumbers[i]) {
        this.flag = false;
        break;
      }
    }

    if (this.flag == true && this.timeFlag == false) {
      this.result = "GRATULACJE!"
    }
    else {
      this.result = "Spróbuj jeszcze raz ;C"
    }
  }
}
