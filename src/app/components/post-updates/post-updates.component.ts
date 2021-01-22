import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { FriendsManagementService } from 'src/app/services/friends-management.service';

@Component({
  selector: 'app-post-updates',
  templateUrl: './post-updates.component.html',
  styleUrls: ['./post-updates.component.scss'],
})
export class PostUpdatesComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private fb: FormBuilder,
    private fmService: FriendsManagementService,
    private _snackBar: MatSnackBar
  ) {}

  updateForm = this.fb.group({
    email: ['', Validators.required],
    friendEmail: ['', Validators.required],
    text: ['', Validators.required],
  });

  ngOnInit(): void {}

  onSubmitorm() {
    console.log(this.updateForm.value);
    this.fmService.postUpdates(this.updateForm.value).subscribe((res) => {
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
