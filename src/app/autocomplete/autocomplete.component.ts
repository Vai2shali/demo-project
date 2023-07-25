import { Component,OnInit } from '@angular/core';
 import { ApiService } from '../service/api.service';
 
 
 
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
 
export class AutocompleteComponent    {
   
  
items!: any[];

selectedItem: any;

suggestions!: any[];

search(event: { query: string; }) {
    this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
}
 
}

 