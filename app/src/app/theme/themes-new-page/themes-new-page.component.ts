import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-themes-new-page',
  templateUrl: './themes-new-page.component.html',
  styleUrls: ['./themes-new-page.component.scss']
})
export class ThemesNewPageComponent {

  constructor() { }

  newThemeHandler(form: NgForm): void {
    if (form.invalid) { return; }
    console.log(form.value);
  }

}
