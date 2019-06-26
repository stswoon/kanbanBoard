import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./modules/login/login.component";
import {CanActivateBoardPageService} from "./modules/board/components/board-page/can-activate-board-page.service";
import {BoardPageComponent} from "./modules/board/components/board-page/board-page.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: BoardPageComponent,  canActivate: [CanActivateBoardPageService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
