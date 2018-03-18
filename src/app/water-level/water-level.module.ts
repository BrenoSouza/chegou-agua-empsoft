import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterLevelComponent } from './water-level.component';
import { waterLevelRouting } from './water-level.routing';
import { ChatService } from '../chat.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [WaterLevelComponent],
  providers: [
    ChatService
  ],
  exports: [
    WaterLevelComponent
  ]
})
export class WaterLevelModule { }
