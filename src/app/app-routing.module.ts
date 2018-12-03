import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { GameComponent } from './game/game.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AboutComponent } from './about/about.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

const routes: Routes = [
    {path: '', redirectTo: '/login-screen', pathMatch: 'full'},
    {path: 'login-screen', component: LoginScreenComponent},
    {path: 'test', component: TestComponent},
    {path: 'login-form', component: LoginFormComponent},
    {path: 'game', component: GameComponent},
    {path: 'ladeboard', component: LeaderboardComponent},
    {path: 'about', component: AboutComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginScreenComponent, TestComponent, LoginFormComponent, GameComponent, LeaderboardComponent, AboutComponent]
