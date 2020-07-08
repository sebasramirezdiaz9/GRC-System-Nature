import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatprice'
})
export class FormatpricePipe implements PipeTransform {

  transform(value: string): string{
    value = value.toLocaleLowerCase();
    let nombres = value.split(" ");

    nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);

    return nombres.join(" ");
  }

}
