import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OopsComponent } from './oops/oops.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'homePage',
    component: HomeComponent,
  },
  {
    path: 'loginPage',
    component: LoginComponent,
  },
  {
    path: 'registerPage',
    component: RegisterComponent,
  },
  {
    path: 'userPage',
    component: UserComponent,
  },
  {
    path: '**',
    component: OopsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
