import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
    {path: 'test', component: TestComponent},
    {path: 'login-form', component: LoginFormComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'game', component: GameComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TestComponent, LoginFormComponent, HeaderComponent, GameComponent ]