import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './web-page/home/home.component';
import {AboutComponent} from './web-page/about/about.component';
import {ContactComponent } from './web-page/contact/contact.component';
import { QuestionsComponent} from './web-page/questions/questions.component';


const routes: Routes = [
  {path:'home', component:HomeComponent },
  {path:'about', component:AboutComponent },
  {path:'contact', component:ContactComponent  },
  {path:'questions', component: QuestionsComponent},
  {path: '**', pathMatch: 'full',redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
