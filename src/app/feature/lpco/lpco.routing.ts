import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LpcoIncluirComponent} from './incluir/lpco-incluir.component';

export const LpcoRoute: Routes = [
  {
    path: '',
    component: LpcoIncluirComponent
  },
];

export const lcpoRouter: ModuleWithProviders = RouterModule.forChild(
  LpcoRoute
);
