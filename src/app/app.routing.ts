import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryComponent } from './components/library/library.component';
import { ChatComponent } from './components/chat/chat.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { HomeComponent } from './components/home/home.component';

// Route Configuration
export const routes: Routes = [
  // { path: '', redirectTo: '/dogs', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'chat', component: ChatComponent },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);
