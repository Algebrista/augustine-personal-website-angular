import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import {MaterializeModule} from 'angular2-materialize';
import {Router, RouterModule, Routes} from '@angular/router';
import {SpinnerComponent} from './ui_loading/spinner/spinner.component';

const appRoutes : Routes =[
  {
    path: '',
    component: HomeComponent,
    data: {title: 'Home'}
  },

  {
    path: 'about',
    component: AboutComponent,
    data: {title: 'About'}
  },

  {
    path: 'project',
    component: ProjectComponent,
    data: {title: 'Project'}
  },

  {
    path: 'contact',
    component: ContactComponent,
    data: {title: 'Contact'}
  },

];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    ProjectComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing: false}),
    MaterializeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
