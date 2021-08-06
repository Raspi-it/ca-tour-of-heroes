import { environment } from 'src/environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { AppStore } from './app.store';

@NgModule({
  declarations: [AppComponent],
  imports: [

    // Common Module in Page Module reinschmeißen
    // Modules aufräumen
    // Actions nur unter passender Page (ggf. zstl Actions)
    // Ngxs for Root -> AppState / Ngxs for Feature in Page Module

    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,

    NgxsModule.forRoot([AppStore], {developmentMode: !environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
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
