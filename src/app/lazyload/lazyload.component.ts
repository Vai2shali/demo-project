import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { LazyLoadEvent } from 'primeng/api';
interface Item {
  label: string;
  index: number;
}
@Component({
  selector: 'app-lazyload',
  templateUrl: './lazyload.component.html',
  styleUrls: ['./lazyload.component.css']
})
export class LazyloadComponent {
   
}
