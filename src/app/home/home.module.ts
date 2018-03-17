import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { homeRouting } from './home.routing';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    homeRouting,
    HeaderModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
