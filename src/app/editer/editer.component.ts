import { Component } from '@angular/core';

@Component({
  selector: 'app-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.css']
})
export class EditerComponent {
    // data: any;

    // options: any;

    // ngOnInit() {
    //     const documentStyle = getComputedStyle(document.documentElement);
    //     const textColor = documentStyle.getPropertyValue('--text-color');

    //     this.data = {
    //         labels: ['A', 'B', 'C'],
    //         datasets: [
    //             {
    //                 data: [540, 325, 702],
    //                 backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
    //                 hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
    //             }
    //         ]
    //     };

    //     this.options = {
    //         plugins: {
    //             legend: {
    //                 labels: {
    //                     usePointStyle: true,
    //                     color: textColor
    //                 }
    //             }
    //         }
    //     };
    // }
    value: string | undefined;
}
