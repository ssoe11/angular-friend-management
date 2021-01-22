import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { FriendsManagementService } from 'src/app/services/friends-management.service';

@Component({
  selector: 'app-link-up-friends',
  templateUrl: './link-up-friends.component.html',
  styleUrls: ['./link-up-friends.component.scss'],
})
export class LinkUpFriendsComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  message = '';
  constructor(
    private fb: FormBuilder,
    private fmService: FriendsManagementService,
    private _snackBar: MatSnackBar
  ) {}

  linkUpForm = this.fb.group({
    email: ['', Validators.required],
    friendEmail: ['', Validators.required],
  });

  ngOnInit(): void {
    this.message = '';
  }

  onSubmitLinkUpForm() {
    console.log(this.linkUpForm.value);
    this.fmService.update(this.linkUpForm.value).subscribe((res) => {
      // if ((res.status = 'error')) {
      //   this.message = res.message;
      // }
      if (res.message) {
        this.message = res.message;
        this.openSnackBar(res.message);
      }
    });
  }

  openSnackBar(message) {
    this._snackBar.open(message, 'End now', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
