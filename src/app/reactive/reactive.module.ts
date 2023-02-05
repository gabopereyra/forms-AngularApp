import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicosComponent } from './basicos/basicos.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { SwitchesComponent } from './switches/switches.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';


@NgModule({
  declarations: [
    BasicosComponent,
    SwitchesComponent,
    DinamicosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
