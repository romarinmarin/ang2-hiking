import { ContactService } from './contact/contact.service';
import { ContactComponent } from './contact/contact.component';
import { ContactModule } from './contact/contact.module';
import { HikeDetailsComponent } from './hike/hike-details.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HikeListComponent } from './hike/hike-list.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HikeModule} from "./hike/hike.module";
import {RouterModule, Routes} from "@angular/router";



import { AppComponent } from './app.component';
import {HikeService} from "./hike/hike.service";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'hikes', component: HikeListComponent },
  { path: 'hikes/:id', component: HikeDetailsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component : PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HikeModule,
    ContactModule,
    HomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )

  ],
  providers: [HikeService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
