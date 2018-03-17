import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterLevelComponent } from './water-level.component';
import { waterLevelRouting } from './water-level.routing';

@NgModule({
  imports: [
    CommonModule,
    waterLevelRouting
  ],
  declarations: [WaterLevelComponent]
})
export class WaterLevelModule { }
