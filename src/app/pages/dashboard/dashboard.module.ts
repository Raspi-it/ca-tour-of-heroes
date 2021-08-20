import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AppStore } from "src/app/app.store";
import { CoreModule } from "src/app/core/core.module";
import { DataFeatureModule } from "src/app/features/data/data.feature.module";
import { MessagesComponentModule } from "../components/messages/messages.component.module";
import { MessagesComponentState } from "../components/messages/messages.component.state";
import { HeroSearchComponent } from "./components/hero-search/hero.search.component";
import { TopHeroListComponent } from "./components/top-hero-list/top.hero.list.component";
import { DashboardPage } from "./dashboard.page";

@NgModule({
    imports: [
        CoreModule,
        CommonModule,

        AppRoutingModule,

        NgxsModule.forFeature([
            AppStore
        ])
    ],
    declarations: [
        DashboardPage,
        HeroSearchComponent,
        TopHeroListComponent
    ],
    exports:[DashboardPage, HeroSearchComponent, TopHeroListComponent]
})
export class DashboardModule { }