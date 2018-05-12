import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ROUTING } from './app.routing';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { TopNavComponent } from './shared/top-nav/top-nav.component';

import { HomeComponent } from './components/home/home.component';
import { LibraryComponent } from './components/library/library.component';
import { ChatComponent } from './components/chat/chat.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { LibrarySideNavComponent } from './components/library/library-side-nav/library-side-nav.component';
import { PackageCardComponent } from './shared/package-card/package-card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { DemoUtilsModule } from './shared/calendar-utils/module';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LibraryComponent,
    ChatComponent,
    ScheduleComponent,
    LibrarySideNavComponent,
    PackageCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ROUTING,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    FormsModule,
    DemoUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
