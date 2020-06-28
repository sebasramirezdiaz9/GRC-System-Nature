import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accesibility',
  templateUrl: './accesibility.component.html',
  styleUrls: ['./accesibility.component.css']
})
export class AccesibilityComponent {
  @Input() WebText:string;
  to_speak:any;
  paused:boolean = false;
  playing:boolean = false;

  constructor() { 

  }

  play() {
    this.playing = true;
    if (this.paused) {
      this.paused = false;
      window.speechSynthesis.resume();
    } else window.speechSynthesis.speak(this.to_speak);
  }

  pause() {
    this.playing = false;
    this.paused = true;
    window.speechSynthesis.pause();
  }

  start() {
    this.to_speak = new SpeechSynthesisUtterance(this.WebText);
    this.to_speak.rate = 1;
  }

}
