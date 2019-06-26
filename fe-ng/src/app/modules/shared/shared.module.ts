import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpService} from "./services/http/http.service";
import {LoginService} from "./services/login/login.service";
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {LoadingService} from "./services/loading/loading.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    HttpService,
    LoginService,
    LoadingService,

    MessageService
  ]
})
export class SharedModule {
}
