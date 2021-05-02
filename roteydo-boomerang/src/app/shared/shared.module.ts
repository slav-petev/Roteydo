import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from './footer/footer.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        RouterModule,
        TranslateModule.forChild()
    ],
    declarations: [
        NavigationComponent,
        FooterComponent,
        UnderConstructionComponent
    ],
    exports: [
        NavigationComponent,
        FooterComponent,
        UnderConstructionComponent
    ]
})
export class SharedModule {}