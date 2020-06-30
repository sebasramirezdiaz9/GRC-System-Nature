import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './web-page/home/home.component';
import { AboutComponent } from './web-page/about/about.component';
import { ContactComponent } from './web-page/contact/contact.component';
import { QuestionsComponent } from './web-page/questions/questions.component';
import { LoginComponent } from './auth/login/login/login.component';
import { RegisterComponent } from './auth/login/register/register.component';
import { WelcomeComponent } from './component-web/welcome/welcome.component';
import { SalesComponent } from './auth/sales/sales.component';
import { CommissionsComponent } from './auth/commissions/commissions.component';
import { InventoryComponent } from './auth/inventory/inventory.component';
import { StadisticsComponent } from './auth/stadistics/stadistics.component';
import { ProductsComponent } from './auth/products/products.component';
const routes: Routes = [
  {path:'home', component:HomeComponent },
  {path:'about', component:AboutComponent },
  {path:'contact', component:ContactComponent  },
  {path:'questions', component: QuestionsComponent},
  {path:'login', component:LoginComponent  },
  {path:'system/register', component:RegisterComponent},
  {path:'system/welcome', component:WelcomeComponent},
  {path:'system/sales', component: SalesComponent},
  {path:'system/products', component: ProductsComponent},
  {path:'system/commissions', component: CommissionsComponent},
  {path:'system/inventory', component: InventoryComponent},
  {path:'system/stadistics', component: StadisticsComponent},
  {path:'**', pathMatch: 'full',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
