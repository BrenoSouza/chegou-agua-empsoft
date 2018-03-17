import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterLevelComponent } from './water-level.component';
import { waterLevelRouting } from './water-level.routing';
import { ChatService } from '../services/chat.service';

@NgModule({
  imports: [
    CommonModule,
    waterLevelRouting
  ],
  declarations: [WaterLevelComponent],
  providers: [ChatService]
})
export class WaterLevelModule { }
