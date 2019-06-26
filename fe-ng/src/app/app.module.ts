import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {BoardComponent} from './components/board/board.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {
  ConfirmationService,
  ConfirmDialogModule,
  InputTextModule,
  MessageModule,
  MessageService,
  ProgressSpinnerModule
} from "primeng/primeng";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "./components/login/login.service";
import {BoardService} from "./components/board/board.service";
import {HeaderComponent} from './components/header/header.component';
import {BoardPageComponent} from './components/board-page/board-page.component';
import {MatCardModule} from "@angular/material";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CanActivateBoardPageService} from "./components/board-page/can-activate-board-page.service";
import {HttpService} from "./services/http/http.service";
import {HeaderService} from "./components/header/header.service";
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from "primeng/toast";
import {TicketComponent} from './components/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoardComponent,
    HeaderComponent,
    BoardPageComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    MessageModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    MatCardModule,
    DragDropModule,
    HttpClientModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [
    CanActivateBoardPageService,
    HttpService,
    HeaderService,
    LoginService,
    BoardService,
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
