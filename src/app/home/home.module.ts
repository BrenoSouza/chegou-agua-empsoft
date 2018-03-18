import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { homeRouting } from './home.routing';
import { HeaderModule } from '../header/header.module';
import { ChatService } from '../chat.service';
import { WaterLevelModule } from '../water-level/water-level.module';
import { GraphicModule } from '../graphic/graphic.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    homeRouting,
    HeaderModule,
    WaterLevelModule
  ],
  declarations: [HomeComponent],
  providers: [
    ChatService
  ]
})
export class HomeModule { }
