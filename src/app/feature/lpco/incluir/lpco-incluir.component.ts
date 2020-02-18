import {Component} from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-lpco-incluir',
  templateUrl: './lpco-incluir.component.html',
  styleUrls: ['./lpco-incluir.component.css']
})
export class LpcoIncluirComponent {

  teste = [];
  teste2;
  value: any;
  valorDrop: any;
  constructor() {
    this.teste = [
      {label: 'Select City', value: "null"},
      {label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}},
      {label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}},
      {label: 'London', value: {id: 3, name: 'London', code: 'LDN'}},
      {label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}},
      {label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}}
    ];
  }
}
