import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicComponent } from './graphic.component';
import { graphicRouting } from './graphic.routing';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';
import { CrudServiceService } from '../crud-service.service';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    HttpModule
  ],
  declarations: [GraphicComponent],
  exports: [
    GraphicComponent
  ],
  providers: [
    CrudServiceService
  ]
})
export class GraphicModule { }
