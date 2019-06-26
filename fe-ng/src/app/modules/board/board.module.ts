import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {CanActivateBoardPageService} from "./components/board-page/can-activate-board-page.service";
import {BoardService} from "./components/board/board.service";
import {BoardComponent} from "./components/board/board.component";
import {BoardPageComponent} from "./components/board-page/board-page.component";
import {TicketComponent} from "./components/ticket/ticket.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {HeaderModule} from "../header/header.module";
import {ReactiveFormsModule} from "@angular/forms";
import {
  CalendarModule,
  ConfirmationService,
  ConfirmDialogModule,
  InputTextareaModule,
  InputTextModule
} from "primeng/primeng";

@NgModule({
  declarations: [
    BoardComponent,
    BoardPageComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    HeaderModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule
  ],
  providers: [
    CanActivateBoardPageService,
    BoardService,
    ConfirmationService
  ],
})
export class BoardModule { }
