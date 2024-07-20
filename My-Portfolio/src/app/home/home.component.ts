import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('skillsDiv') skillsDiv : ElementRef<HTMLElement> | undefined;
  @ViewChild('projectsDiv') projectDiv : ElementRef<HTMLElement> | undefined;
  @ViewChild('infoDiv') infoDiv : ElementRef<HTMLElement> | undefined;
  @ViewChild('contactsDiv') contactsDiv : ElementRef<HTMLElement> | undefined;
  @ViewChild('navbar') footButton : ElementRef<HTMLElement> | undefined;

  myNumber : string = 'aizzo450@gmail.com'
  isOpenDiv : boolean = false;

  constructor(private el : ElementRef){}

  scrollToSection(id: string) {
    let element : HTMLElement | null = null;

    if (id === 'skills' && this.skillsDiv) {
      element = this.skillsDiv.nativeElement
    }else if (id === 'projects' && this.projectDiv) {
      element = this.projectDiv.nativeElement
    }else if (id === 'info' && this.infoDiv) {
      element = this.infoDiv.nativeElement
    }else if (id === 'contacts' && this.contactsDiv) {
      element = this.contactsDiv.nativeElement
    }else if (id === 'navbar' && this.footButton) {
      element = this.footButton.nativeElement
    }

    if (element) {
      element.scrollIntoView({behavior:'smooth',block:'start'})
    }
  }

  openDiv(){
    this.isOpenDiv = !this.isOpenDiv
  }
}
