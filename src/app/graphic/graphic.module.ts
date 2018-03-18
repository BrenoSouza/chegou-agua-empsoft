import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicComponent } from './graphic.component';
import { graphicRouting } from './graphic.routing';

@NgModule({
  imports: [
    CommonModule,
    graphicRouting
  ],
  declarations: [GraphicComponent],
  exports: [
    GraphicComponent
  ]
})
export class GraphicModule { }
