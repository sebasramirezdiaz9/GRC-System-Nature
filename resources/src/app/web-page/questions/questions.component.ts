import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  WebText:string = '';
  productsList:string =  'Descuentos: \n';
  panelOpenState = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    document.querySelectorAll('[class="speaker"]').forEach( e => {
      this.WebText += e.textContent;
    });
  }
 
  getProducts() :void{
    this.productsList =  'Descuentos: \n';
    let list:any;
    list = this.http.get('/api/dataqr');
    list.subscribe( e => {
        var content = e;
        content.forEach( a => {
          this.productsList += a.name + ' a solo $' + a.precio + '\n';
        })
    });
  }

}
