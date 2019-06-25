import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {BoardComponent} from './components/board/board.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {InputTextModule, MessageModule} from "primeng/primeng";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CanActivateBoardService} from "./components/board/can-activate-board.service";
import {LoginService} from "./components/login/login.service";
import {BoardService} from "./components/board/board.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    MessageModule,
    ReactiveFormsModule
  ],
  providers: [
    CanActivateBoardService,
    LoginService,
    BoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
