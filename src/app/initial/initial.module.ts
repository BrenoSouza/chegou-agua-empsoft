import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialComponent } from './initial.component';
import { initialRouting } from './initial.routing';

@NgModule({
  imports: [
    CommonModule,
    initialRouting
  ],
  declarations: [InitialComponent]
})
export class InitialModule { }
