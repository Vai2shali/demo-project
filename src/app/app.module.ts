import { NgModule } from '@angular/core';
 import {CalendarModule} from 'primeng/calendar';
 import {AutoCompleteModule} from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ChartModule } from 'primeng/chart';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
 
 
 

import { AppComponent } from './app.component';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
   import { ServiceComponent } from './service/service.component';
   import { CalenderComponent } from './calender/calender.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FilterComponent } from './filter/filter.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PaginationComponent } from './pagination/pagination.component';
import { LazyloadComponent } from './lazyload/lazyload.component';
import { EditerComponent } from './editer/editer.component';
import { ChartComponent } from './chart/chart.component';
import { FileuploadComponent } from './fileupload/fileupload.component';

@NgModule({
  declarations: [
    AppComponent,
      ServiceComponent,
       CalenderComponent,
       AutocompleteComponent,
       FilterComponent,
       DropdownComponent,
       PaginationComponent,
       LazyloadComponent,
       EditerComponent,
       ChartComponent,
       FileuploadComponent,
  ],
  imports: [
     FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
     CalendarModule,
     AutoCompleteModule,
    TableModule,
    PaginatorModule,
    ButtonModule,
    DropdownModule ,
    BrowserModule,
    BrowserAnimationsModule,
    VirtualScrollerModule ,
    ChartModule,
    EditorModule,
    FileUploadModule 
 
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
