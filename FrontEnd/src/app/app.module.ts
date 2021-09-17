import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, ThemeService } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './apps/todo-list/todo/todo.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { TodoListComponent } from './apps/todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { OeLayoutComponent } from './oe-layout/oe-layout.component';
import { ReLayoutComponent } from './re-layout/re-layout.component';
import { OeSidebarComponent } from './shared/oe-sidebar/oe-sidebar.component';
import { FrontDashboardComponent } from './module/front-dashboard/front-dashboard.component';
import { AboutUsComponent } from './module/front-dashboard/about-us/about-us.component';
import { ContactUsComponent } from './module/front-dashboard/contact-us/contact-us.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TodoListComponent,
    TodoComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    OeLayoutComponent,
    ReLayoutComponent,
    OeSidebarComponent,
    FrontDashboardComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    
    ReactiveFormsModule,
    ChartsModule,HttpClientModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
