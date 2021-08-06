import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxsModule } from "@ngxs/store";
import { ClearMessagesFeatureModule } from "src/app/features/clear-messages/clear.messages.feature.module";
import { GetMessagesFeatureModule } from "src/app/features/get-messages/get.messages.feature.module";
import { PushMessagesFeatureModule } from "src/app/features/push-messages/push.messages.feature.module";
import { DashboardModule } from "../dashboard/dashboard.module";
import { DetailModule } from "../detail/detail.module";
import { HeroesModule } from "../heroes/heroes.module";
import { MessagesComponent } from "./components/messages/messages.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HomePage } from "./home.page";
import { HomePageState } from "./home.page.state";

@NgModule({
    imports: [
        CommonModule,
        PushMessagesFeatureModule,
        GetMessagesFeatureModule,
        ClearMessagesFeatureModule,

        DashboardModule,
        DetailModule,
        HeroesModule,

        NgxsModule.forFeature([
            HomePageState
        ]),
        // RouterModule.forChild([
        //     {
        //         path: 'dashboard',
        //         loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
        //     },
        //     {
        //         path: 'detail',
        //         loadChildren: () => import('../detail/detail.module').then(m => m.DetailModule)
        //     },
        //     {
        //         path: 'heroes',
        //         loadChildren: () => import('../heroes/heroes.module').then(m => m.HeroesModule)
        //     },
        // ])
    ],
    declarations: [
        //Components
        MessagesComponent,
        NavigationComponent,
        HomePage
    ]
})
export class HomeModule { }