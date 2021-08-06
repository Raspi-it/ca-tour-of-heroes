import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { CoreModule } from "src/app/core/core.module";
import { DataFeatureModule } from "src/app/features/data/data.feature.module";
import { HeroSearchComponent } from "./components/hero-search/hero.search.component";
import { TopHeroListComponent } from "./components/top-hero-list/top.hero.list.component";
import { DashboardPage } from "./dashboard.page";
import { DashboardPageState } from "./dashboard.page.state";

@NgModule({
    imports: [
        CoreModule,
        CommonModule,
        DataFeatureModule,

        NgxsModule.forFeature([
            DashboardPageState
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