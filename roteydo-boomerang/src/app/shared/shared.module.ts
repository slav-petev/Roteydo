import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        TranslateModule.forChild()
    ],
    declarations: [
        NavigationComponent,
        FooterComponent
    ],
    exports: [
        NavigationComponent,
        FooterComponent
    ]
})
export class SharedModule {}