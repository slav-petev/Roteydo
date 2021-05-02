import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ModelsRoutingModule } from "./models-routing.module";
import { ModelsComponent } from "./models.component";

@NgModule({
    imports: [
        CommonModule,
        ModelsRoutingModule
    ],
    declarations: [
        ModelsComponent
    ]
})
export class ModelsModule {}