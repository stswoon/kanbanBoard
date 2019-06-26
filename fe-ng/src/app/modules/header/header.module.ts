import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "primeng/shared";
import {HeaderComponent} from "./header.component";
import {HeaderService} from "./header.service";
import {ProgressSpinnerModule} from "primeng/primeng";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProgressSpinnerModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    HeaderService
  ]
})
export class HeaderModule { }
