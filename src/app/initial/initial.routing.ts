import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './initial.component';
import { ModuleWithProviders } from '@angular/core';


const initialRoutes: Routes = [
    {path: '', component: InitialComponent}
];
export const initialRouting: ModuleWithProviders = RouterModule.forChild(initialRoutes);
