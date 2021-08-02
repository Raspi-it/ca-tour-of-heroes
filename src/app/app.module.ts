import { environment } from 'src/environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { DataFeatureModule } from './features/data/data.feature.module';

import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { CoreModule } from './core/core.module';

import { DashboardPageState } from './pages/dashboard/dashboard.page.state';

import { AppComponent } from './app.component';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { TopHeroListComponent } from './pages/dashboard/components/top-hero-list/top.hero.list.component';
import { HeroSearchComponent } from './pages/dashboard/components/hero-search/hero.search.component';
import { DetailPage } from './pages/detail/detail.page';
import { PushMessagesFeatureModule } from './features/push-messages/push.messages.feature.module';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './pages/heroes/heroes.module';
import { HeroPage } from './pages/heroes/heroes.page';
import { HomePage } from './pages/home/home.page';
import { HomeModule } from './pages/home/home.module';
import { MessagesComponent } from './pages/home/components/messages/messages.component';
import { NavigationComponent } from './pages/home/components/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,

    //Komponenten der Pages -> sollten eig nicht hier drin sein, Danny fragen
    HeroSearchComponent,
    TopHeroListComponent,
    DashboardPage,
    DetailPage,
    NavigationComponent,
    MessagesComponent,
    HeroPage,
    HomePage
  ],
  imports: [
    NgxsModule.forRoot([DashboardPageState], {developmentMode: !environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    
    //Muss das hier rein, oder kann das in tieferen ebenen rein?
    DataFeatureModule,
    PushMessagesFeatureModule,
    HeroesModule,
    AppRoutingModule,
    HomeModule,

    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'heroes',
        loadChildren: () => import('./pages/heroes/heroes.module').then(m => m.HeroesModule),
      },
      {
        path: 'detail',
        loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule),
      }
    ], {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
