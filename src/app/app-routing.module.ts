import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { GameComponent } from './game/game.component';
import { LadeboardComponent } from './ladeboard/ladeboard.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {path: 'test', component: TestComponent},
    {path: 'login-form', component: LoginFormComponent},
    {path: 'game', component: GameComponent},
    {path: 'ladeboard', component: LadeboardComponent},
    {path: 'about', component: AboutComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TestComponent, LoginFormComponent, GameComponent, LadeboardComponent,AboutComponent]
