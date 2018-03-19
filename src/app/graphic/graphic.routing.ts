import { RouterModule, Routes } from '@angular/router';
import { GraphicComponent } from './graphic.component';
import { ModuleWithProviders } from '@angular/core';


const graphicRoutes: Routes = [
    {
        path: '', component: GraphicComponent
    }
];
export const graphicRouting: ModuleWithProviders = RouterModule.forChild(graphicRoutes);
