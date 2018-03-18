import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { homeRouting } from './home.routing';
import { HeaderModule } from '../header/header.module';
import { ChatService } from '../chat.service';
import { WaterLevelModule } from '../water-level/water-level.module';
import { GraphicModule } from '../graphic/graphic.module';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    homeRouting,
    HeaderModule,
    WaterLevelModule,
    GraphicModule,
    TabsModule.forRoot()
  ],
  declarations: [HomeComponent],
  providers: [
    ChatService
  ]
})
export class HomeModule { }
