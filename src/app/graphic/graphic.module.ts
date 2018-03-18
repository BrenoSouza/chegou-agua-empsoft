import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicComponent } from './graphic.component';
import { graphicRouting } from './graphic.routing';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [GraphicComponent],
  exports: [
    GraphicComponent
  ]
})
export class GraphicModule { }
