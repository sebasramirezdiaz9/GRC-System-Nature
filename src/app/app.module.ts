import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    QuestionsComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpFWj4lMAXPF6su9bX53L1fMs69b0pr10'
    }),
    MatCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
