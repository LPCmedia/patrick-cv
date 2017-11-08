import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { ExperienceComponent } from './experience/experience.component';
import { OtherExperienceComponent } from './other-experience/other-experience.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    ExperienceComponent,
    SideBarComponent,
    MainLayoutComponent,
    OtherExperienceComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
