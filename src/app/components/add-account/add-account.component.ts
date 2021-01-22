import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { FriendsManagementService } from 'src/app/services/friends-management.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss'],
})
export class AddAccountComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private fb: FormBuilder,
    private fmService: FriendsManagementService,
    private _snackBar: MatSnackBar
  ) {}

  addAccountForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
  });

  ngOnInit(): void {}

  onSubmitForm() {
    console.log(this.addAccountForm.value);
    this.fmService
      .addUserAccount(this.addAccountForm.value)
      .subscribe((res) => {
        if (res.message) {
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
