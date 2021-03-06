import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterLevelComponent } from './water-level.component';
import { waterLevelRouting } from './water-level.routing';
import { ChatService } from '../chat.service';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ProgressbarModule.forRoot(),
    ChartsModule
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
