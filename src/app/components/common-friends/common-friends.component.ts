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
  selector: 'app-common-friends',
  templateUrl: './common-friends.component.html',
  styleUrls: ['./common-friends.component.scss'],
})
export class CommonFriendsComponent implements OnInit {
  //table
  displayedColumns: string[] = ['email'];
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

  commonFriendsForm = this.fb.group({
    email: ['', Validators.required],
    friendEmail: ['', Validators.required],
  });

  ngOnInit(): void {
    // Assign the data to the data source for the table to render
  }

  onSubmitForm() {
    console.log(this.commonFriendsForm.value);
    this.fmService
      .getCommonFriends(this.commonFriendsForm.value)
      .subscribe((res) => {
        if (res.status == 'error') {
          this.openSnackBar(res.message);
        }
        console.log(res);
        //list down common friends
        this.dataSource = new MatTableDataSource(res.data);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  openSnackBar(message) {
    this._snackBar.open(message, 'End now', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  // ngAfterViewInit() {
  //   if (this.dataSource) {
  //     console.log(this.dataSource);
  //     this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort;
  //   }
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
