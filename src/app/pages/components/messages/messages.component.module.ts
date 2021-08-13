import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { MessagesComponentState } from "./messages.component.state";
import { MessagesComponent } from "./messages.component";
import { GetMessagesFeatureModule } from "src/app/features/get-messages/get.messages.feature.module";
import { ClearMessagesFeatureModule } from "src/app/features/clear-messages/clear.messages.feature.module";
import { PushMessagesFeatureModule } from "src/app/features/push-messages/push.messages.feature.module";

@NgModule({
    imports: [
        NgxsModule.forFeature([
            MessagesComponentState
        ]),
        CommonModule,
        GetMessagesFeatureModule,
        ClearMessagesFeatureModule,
        PushMessagesFeatureModule
    ],
    declarations: [
        //Components
        MessagesComponent
    ],
    exports: [MessagesComponent]
})
export class MessagesComponentModule { }