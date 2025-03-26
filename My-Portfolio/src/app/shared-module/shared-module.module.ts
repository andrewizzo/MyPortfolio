import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { InfoComponent } from "../components/info/info.component";
import { ContactsComponent } from "../components/contacts/contacts.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { SkillsComponent } from "../components/skills/skills.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { FooterComponent } from "../components/footer/footer.component";

@NgModule({
  declarations:[InfoComponent,ContactsComponent,ProjectsComponent,SkillsComponent,NavbarComponent,FooterComponent],
  imports:[CommonModule,],
  exports:[InfoComponent,ContactsComponent,ProjectsComponent,SkillsComponent,NavbarComponent,FooterComponent]
})
export class SharedModule{}
