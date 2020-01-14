import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ CurrencyPipe ]
})
export class AppComponent  {
  name = 'Angular';
  value = 123456789;
  valueFormatted = "$123,456,789"

  constructor(public currencyPipe: CurrencyPipe){
  }

  formatear($event){
    let value = "0";
    console.log($event.target.value);
    console.log(!/^[0-9]+$/.test($event.target.value));
      value = $event.target.value.replace(/\D/g,'');
      console.log(value)
    let x = Number(value);
    this.value = x;
    this.valueFormatted = this.currencyPipe.transform(value,'USD');
  }

  unformat(){
    this.valueFormatted = this.value.toString();
  }
 
}
