import { RouterModule, Routes } from '@angular/router';
import { WaterLevelComponent } from './water-level.component';
import { ModuleWithProviders } from '@angular/core';

const waterLevelRoutes: Routes = [
    {
        path: '', component: WaterLevelComponent
    }
];

export const waterLevelRouting: ModuleWithProviders = RouterModule.forChild(waterLevelRoutes);
