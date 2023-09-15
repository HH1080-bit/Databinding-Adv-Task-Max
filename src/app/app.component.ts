import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers:Number[] = [];
  evenNumbers:Number[] = [];
  i = 0;
  intervalId:any;

  addingNumber(){
    this.intervalId = setInterval(() => {
       this.i++
       if(this.i % 2 === 0){
        this.evenNumbers.push(this.i)
       }
       else {
        this.oddNumbers.push(this.i)
       }
    }, 1000);
  }
  pausing(){
    clearInterval(this.intervalId);
  }
}
