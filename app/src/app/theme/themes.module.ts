import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { RecentPostComponent } from './recent-post/recent-post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ThemesRoutingModule } from './themes-routing.module';
import { ThemesNewPageComponent } from './themes-new-page/themes-new-page.component';
import { ThemesDetailPageComponent } from './themes-detail-page/themes-detail-page.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    ThemesNewPageComponent,
    ThemeListComponent,
    RecentPostComponent,
    ThemesDetailPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ThemesRoutingModule,
  ],
  exports: [
    ThemeListComponent
  ]
})
export class ThemesModule { }