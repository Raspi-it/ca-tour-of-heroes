import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPage } from './pages/dashboard/dashboard.page';
import { HeroesPage } from './pages/heroes/heroes.page';
import { DetailPage } from './pages/detail/detail.page';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPage },
  { path: 'detail/:id', component: DetailPage },
  { path: 'heroes', component: HeroesPage }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
