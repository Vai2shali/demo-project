import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  // first: number = 0;

  // rows: number = 10;

  // onPageChange(event: { first: number; rows: number; }) {
  //     this.first = event.first;
  //     this.rows = event.rows;
  // }

  first: number = 0;

    rows: number = 10;

    onPageChange(event:{first:number; rows:number; }) {
        this.first = event.first;
        this.rows = event.rows;
    }
}
