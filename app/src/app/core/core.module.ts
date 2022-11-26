import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { UserService } from './services/user.service';
import { ThemeService } from './services/theme.service';
//import { storageServiceProvider } from './services/storage.service';
import { PostService } from './services/post.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule {
  // static forRoot(): ModuleWithProviders<CoreModule> {
  //   return {
  //     ngModule: CoreModule,
  //     providers: [
  //       UserService,
  //       ThemeService,
  //       storageServiceProvider,
  //       PostService
  //     ]
  //   }
  // }
}