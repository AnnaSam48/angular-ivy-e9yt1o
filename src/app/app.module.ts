import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from '../employee.service';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EmployeeListComponent, EmployeeDetailComponent ],
  providers:    [EmployeeService], 
  /*register employee service to app module so all components
  that need it can access it*/
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
