import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AppStore } from "src/app/app.store";
import { AddHeroFeatureModule } from "src/app/features/add-hero/add.hero.feature.module";
import { DataFeatureModule } from "src/app/features/data/data.feature.module";
import { DeleteHeroFeatureModule } from "src/app/features/delete-hero/delete.hero.feature.module";
import { MessagesComponentModule } from "../components/messages/messages.component.module";
import { MessagesComponentState } from "../components/messages/messages.component.state";
import { HeroesPage } from "./heroes.page";
import { HeroesPageState } from "./heroes.page.state";

@NgModule({
    imports: [
        NgxsModule.forFeature([
            HeroesPageState,
            AppStore
        ]),
        CommonModule,

        AppRoutingModule,

        MessagesComponentModule,
        DeleteHeroFeatureModule,
        AddHeroFeatureModule,
        DataFeatureModule
    ],
    declarations: [
        //Components
        HeroesPage
    ],
    exports:  [HeroesPage]
})
export class HeroesModule { }