import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  conversionRate: any;
  selectedCurrency = 'INR';
  configUrl: any = 'https://v6.exchangerate-api.com/v6/11c825490e978353cb652ae3/latest/INR';
  title = 'angular-task';
  productList: any = [
    {
      productImageUrl: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      name: 'cocooil',
      price: 85.00
    },
    {
      productImageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'headphones',
      price: 165.00
    },
    {
      productImageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      name: 'watch',
      price: 500.00
    }
  ];


  getExchangePricing(): any {
    this.http.get(this.configUrl).subscribe((res: any) => this.conversionRate = res?.conversion_rates?.USD);
}

setpricing(key: any): any {
  this.selectedCurrency = key;
  if (key === 'USD') {
    this.getExchangePricing();
  }
}

}
