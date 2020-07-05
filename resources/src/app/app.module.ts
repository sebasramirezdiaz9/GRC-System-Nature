import * as platformBrowser from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './web-page/navbar/navbar.component';
import { HomeComponent } from './web-page/home/home.component';
import { QuestionsComponent } from './web-page/questions/questions.component';
import { ContactComponent } from './web-page/contact/contact.component';
import { AboutComponent } from './web-page/about/about.component';
import { HeaderComponent } from './web-page/navbar/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './web-page/navbar/sidenav-list/sidenav-list.component';
import { AgmCoreModule} from '@agm/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login/login.component';
import { RegisterComponent} from './auth/login/register/register.component';
import { ChartsModule } from 'ng2-charts';
import { QRCodeModule } from 'angularx-qrcode';


import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { MenuComponent } from './web-page/navbar/menu/menu.component';
import { WelcomeComponent } from './component-web/welcome/welcome.component';
import { AccesibilityComponent } from './web-page/accesibility/accesibility.component';
import { SalesComponent } from './auth/sales/sales.component';
import { CommissionsComponent } from './auth/commissions/commissions.component';
import { InventoryComponent } from './auth/inventory/inventory.component';
import { StadisticsComponent } from './auth/stadistics/stadistics.component';
import { ProductsComponent } from './auth/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    QuestionsComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    SidenavListComponent,
    LoginComponent,
    MenuComponent,
    WelcomeComponent,
    RegisterComponent,
    AccesibilityComponent,
    SalesComponent,
    CommissionsComponent,
    InventoryComponent,
    StadisticsComponent,
    ProductsComponent
  
  ],
  imports: [
    platformBrowser.BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpFWj4lMAXPF6su9bX53L1fMs69b0pr10'
    }),
    MatCarouselModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig ),
    AngularFireAuthModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

})

export class AppModule { }
