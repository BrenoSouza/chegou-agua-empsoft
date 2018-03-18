import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
];

@NgModule({
  imports: [
          RouterModule.forRoot(appRoutes, { useHash: true }),
        ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
