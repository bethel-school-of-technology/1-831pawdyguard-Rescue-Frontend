import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './error.component.html',
  selector: "app-error",
  styleUrls: ["./error.component.css"]
})
export class ErrorComponent {
  message = 'An unknown error occurred!';
  //Angular Material Dialog- Inject decorator for error messages
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
}
