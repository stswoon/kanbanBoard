import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MessageModule} from "primeng/message";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/primeng";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MessageModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [
  ]
})
export class LoginModule { }
