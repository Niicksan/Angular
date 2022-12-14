import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { ThemesModule } from './theme/themes.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    ThemesModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }