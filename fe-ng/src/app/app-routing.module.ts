import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {BoardComponent} from "./components/board/board.component";
import {CanActivateBoardService} from "./components/board/can-activate-board.service";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: BoardComponent,  canActivate: [CanActivateBoardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
