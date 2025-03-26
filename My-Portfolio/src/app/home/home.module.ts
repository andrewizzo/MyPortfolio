import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "../shared-module/shared-module.module";

@NgModule({
    declarations:[HomeComponent],
    imports:[CommonModule,HomeRoutingModule,SharedModule],
    exports:[HomeComponent]
})
export class HomeModule{}