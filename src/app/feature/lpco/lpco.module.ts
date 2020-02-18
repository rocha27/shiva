import {NgModule} from '@angular/core';
import {LpcoIncluirComponent} from './incluir/lpco-incluir.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule, RadioButtonModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';


@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextareaModule,
    RadioButtonModule,
    CalendarModule,
    TableModule
  ],
  exports: [
    LpcoIncluirComponent,
  ],
  declarations: [
    LpcoIncluirComponent
  ]
})

export class LpcoModule {
}
