import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginModule} from "./modules/login/login.module";
import {SharedModule} from "./modules/shared/shared.module";
import {HeaderModule} from "./modules/header/header.module";
import {BoardModule} from "./modules/board/board.module";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/primeng";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    LoginModule,
    HeaderModule,
    BoardModule,
    ToastModule,
    ConfirmDialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
