import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  @Output() incrementing = new EventEmitter<void>()
  @Output() stopping = new EventEmitter<void>()

  isStarted:Boolean = false



  startTheGame(){
    if(!this.isStarted){
      this.isStarted = true
      this.incrementing.emit()
    }
    else {
      console.log("The Game Is Running")
    }
  }
  pausingTheGame(){
  if(this.isStarted){
    this.isStarted = false
    this.stopping.emit()
  } else {
      console.log("The Game Is Paused")
  }
  }
}
