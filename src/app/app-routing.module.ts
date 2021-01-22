import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { CommonFriendsComponent } from './components/common-friends/common-friends.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { LinkUpFriendsComponent } from './components/link-up-friends/link-up-friends.component';
import { PostUpdatesComponent } from './components/post-updates/post-updates.component';

const routes: Routes = [
  {
    path: 'add-account',
    component: AddAccountComponent,
  },
  {
    path: 'link-up-friends',
    component: LinkUpFriendsComponent,
  },
  {
    path: 'friends-list',
    component: FriendsListComponent,
  },
  {
    path: 'common-friends',
    component: CommonFriendsComponent,
  },
  {
    path: 'post-updates',
    component: PostUpdatesComponent,
  },
  {
    path: '',
    redirectTo: '/add-account',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
