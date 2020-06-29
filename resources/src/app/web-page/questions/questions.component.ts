import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  WebText:string = '';
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
    document.querySelectorAll('[class="speaker"]').forEach( e => {
      this.WebText += e.textContent;
    });
  }
 

}
