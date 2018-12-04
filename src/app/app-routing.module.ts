import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { GameComponent } from './game/game.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AboutComponent } from './about/about.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
    {path: '', redirectTo: '/login-screen', pathMatch: 'full'},
    {path: 'login-screen', component: LoginScreenComponent},
    {path: 'test', component: TestComponent, canActivate: [LoginGuard]},
    {path: 'login-form', component: LoginFormComponent, canActivate: [LoginGuard]},
    {path: 'game', component: GameComponent, canActivate: [LoginGuard]},
    {path: 'ladeboard', component: LeaderboardComponent, canActivate: [LoginGuard]},
    {path: 'about', component: AboutComponent, canActivate: [LoginGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginScreenComponent, TestComponent, LoginFormComponent, GameComponent, LeaderboardComponent, AboutComponent]
