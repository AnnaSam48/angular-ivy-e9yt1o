import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(){
   return [
    {"id":1, "name":"Tracy","age":24},
    {"id":2, "name":"Brian","age":18},
    {"id":3, "name":"Andrew","age":40},
    {"id":4, "name":"Sam","age":55}
   ];
  }

}