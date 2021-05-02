import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ModelsRoutingModule } from "./models-routing.module";
import { ModelsComponent } from "./models.component";
import {MatTableModule} from '@angular/material/table';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        ModelsRoutingModule,
        MatTableModule,
        TranslateModule.forChild()
    ],
    declarations: [
        ModelsComponent
    ]
})
export class ModelsModule {}