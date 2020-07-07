import { Component, OnInit, } from '@angular/core';
import { BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  titulo:string = "Sobre nuestro enfoque";
  texto2:string = "Hola como estan todos";
  WebText:string = '';
  public colSize=2;
  public isMobile:boolean =false;

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
