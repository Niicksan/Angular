import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITheme } from 'src/app/interfaces/theme';
import { IPost } from 'src/app/interfaces/post';
import { ThemeService } from 'src/app/core/services/theme.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-themes-detail-page',
  templateUrl: './themes-detail-page.component.html',
  styleUrls: ['./themes-detail-page.component.scss']
})
export class ThemesDetailPageComponent implements OnInit {
  theme: ITheme<IPost> | null = null;

  canSubscribe: boolean = true;
  isLoggedIn: boolean = this.userService.isLogged;
  errorFetchingData = false;

  constructor(private activatedRoute: ActivatedRoute,
    private themeService: ThemeService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const themeId = params['id'];
      console.log(params)
      console.log(themeId, typeof (themeId));
      this.themeService.loadTheme(themeId).subscribe({
        next: (theme) => {
          this.theme = theme;
          this.canSubscribe = !this.theme?.subscribers.includes('5fa64b162183ce1728ff371d');
        },
        error: (err) => {
          this.errorFetchingData = true;
          console.error(err);
        }
      });
    })
  }

  canLike(comment: IPost) {
    return !comment.likes.includes('5fa64b162183ce1728ff371d');
  }
}
