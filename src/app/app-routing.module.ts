import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupsComponent } from './components/signups/signups.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListusersComponent } from './components/listusers/listusers.component';

const routes: Routes = [
  
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signups',
    component: SignupsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'navbar',
    component:NavbarComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'listusers',
    component: ListusersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
