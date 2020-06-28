import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
export interface PeriodicElement {
  img: any;
  name:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {img: 'assets/acerca.jpg', name:'Gabriela Montes'},
  {img: 'assets/acerca.jpg', name:'Carlos Aguilar'},
  {img: 'assets/acerca.jpg', name:'Martha Diaz'},
  {img: 'assets/acerca.jpg', name:'Pablo Franco'}

];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  lat: number = 21.9132872;
  lng: number = -102.3170686;
  zoom: number= 16;
  WebText:string = '';

  public colSize=2;
  public isMobile:boolean =false;
  
  displayedColumns: string[] = ['img','name'];
  dataSource = ELEMENT_DATA;


  constructor(breakpointer:BreakpointObserver) { 
    breakpointer.observe([
          Breakpoints.Handset
    ]).subscribe(result =>{
        this.isMobile= result.matches;
        if(this.isMobile){
            this.colSize=1;
        }else{
          this.colSize=2;

        }
    });
  }

  ngOnInit(): void {
    document.querySelectorAll('[class="speaker"]').forEach( e => {
      this.WebText += e.textContent;
    });
  }

}
