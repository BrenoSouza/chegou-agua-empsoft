import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ModuleWithProviders } from '@angular/core';


const homeRoutes: Routes = [
    { path: '', component: HomeComponent, children: [
        { path: '', redirectTo: 'water', pathMatch: 'prefix' },
        { path: 'water', loadChildren: 'app/water-level/water-level.module#WaterLevelModule' }
    ]
    }
];
export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
