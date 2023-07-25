import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { DataService } from '../data.service';
import { SortEvent } from 'primeng/api';
   
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
   public products:any;
  productService: any;
    
  constructor(private api:ApiService){
    
 
this.getApiData();
}
  getApiData(){
    this.api.getData ().subscribe(
      ((res:any)=>{
        // console.log(res);
        this.products=res.products;
        console.log(this.products);
      }),
      ((err:any)=>{
        console.log(err);
      })
     
    )
 };
  
  
   
}

 