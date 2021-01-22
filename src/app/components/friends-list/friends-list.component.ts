import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { FriendsManagementService } from 'src/app/services/friends-management.service';

export interface UserData {
  email: string;
}

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent implements OnInit {
  //table
  displayedColumns: string[];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  //snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private fb: FormBuilder,
    private fmService: FriendsManagementService,
    private _snackBar: MatSnackBar
  ) {}

  friendListForm = this.fb.group({
    email: ['', Validators.required],
  });

  ngOnInit(): void {}

  onClickAllFriends() {
    this.displayedColumns = ['email', 'action'];
    console.log(this.friendListForm.value.email);
    this.fmService
      .getAllFriends(this.friendListForm.value.email)
      .subscribe((res) => {
        if (res.status == 'error') {
          this.openSnackBar(res.message);
        }
        console.log(res);
        //list down all friends
        this.dataSource = new MatTableDataSource(res.result);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  onClickFriendUpdates() {
    this.displayedColumns = ['email'];
    console.log(this.friendListForm.value);
    this.fmService
      .getUpdateFriends(this.friendListForm.value.email)
      .subscribe((res) => {
        if (res.status == 'error') {
          this.openSnackBar(res.message);
        }
        console.log(res);
        //list down friends with update
        this.dataSource = new MatTableDataSource(res.result);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  onClickSubscribe(e) {
    let data = {
      email: this.friendListForm.value.email,
      friendEmail: e,
    };
    this.fmService.subscribeUpdate(data).subscribe((res) => {
      if (res.message) {
        this.openSnackBar(res.message);
      }
      this.onClickAllFriends();
    });
  }

  onClickUnSubscribe(e) {
    let data = {
      email: this.friendListForm.value.email,
      friendEmail: e,
    };
    this.fmService.unsubscribeUpdate(data).subscribe((res) => {
      if (res.message) {
        this.openSnackBar(res.message);
      }
      this.onClickAllFriends();
    });
  }

  onClickBlock(e) {
    let data = {
      email: this.friendListForm.value.email,
      friendEmail: e,
    };
    this.fmService.blockFriend(data).subscribe((res) => {
      if (res.message) {
        this.openSnackBar(res.message);
      }
      this.onClickAllFriends();
    });
  }

  onClickUnBlock(e) {
    let data = {
      email: this.friendListForm.value.email,
      friendEmail: e,
    };
    this.fmService.unblockFriend(data).subscribe((res) => {
      if (res.message) {
        this.openSnackBar(res.message);
        this.onClickAllFriends();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openSnackBar(message) {
    this._snackBar.open(message, 'End now', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
