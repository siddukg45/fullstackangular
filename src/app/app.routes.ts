import { Routes } from '@angular/router';
import { Pageregister } from './compononents/pageregister/pageregister';
// import { Pagelogin } from './compononents/pagelogin/pagelogin';
// import { Home } from './home/home';
import { Profile } from './compononents/profile/profile';
import { Home } from './home/home';
import { Pagelogin } from './pagelogin/pagelogin';
import { Todo } from './service/todo';
import { Pagetodo } from './compononents/pagetodo/pagetodo';
import { Pagegettodo } from './pagegettodo/pagegettodo';
import { Pageedit } from './pageedit/pageedit';
import { Pagedelete } from './compononents/pagedelete/pagedelete';

export const routes: Routes = [
    {path:'',redirectTo:'pagelogin',pathMatch:'full'},
    { path: 'pageregister', component: Pageregister },
    { path: 'pagelogin', component: Pagelogin },
    { path: 'home', component: Home },
    { path: 'todo', component: Pagetodo },
    { path: 'profile/:id', component: Profile },
    { path: 'Pagegettodo/:id', component : Pagegettodo },
     { path: 'pageedit/:id', component : Pageedit },
       { path: 'pagedelete/:id', component : Pagedelete }



];
