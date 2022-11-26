import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { ITheme } from '../../interfaces/theme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {

  themeList: ITheme[] | null = null;
  errorFetchingData = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.loadThemes().subscribe({
      next: (value) => {
        this.themeList = value;
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      }
    });
  }
}