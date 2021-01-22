import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LinkUpFriendsComponent } from './components/link-up-friends/link-up-friends.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { CommonFriendsComponent } from './components/common-friends/common-friends.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { PostUpdatesComponent } from './components/post-updates/post-updates.component';

@NgModule({
  declarations: [AppComponent, LinkUpFriendsComponent, HeaderComponent, FriendsListComponent, CommonFriendsComponent, SidebarComponent, PostUpdatesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
