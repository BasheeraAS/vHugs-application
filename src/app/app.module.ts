import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { FormsModule } from '@angular/forms';
import { SinglepostComponent } from './components/singlepost/singlepost.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ErrorComponent } from './components/error/error.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { UploadComponent } from './components/upload/upload.component';
import { ClassComponent } from './components/resources/class/class.component';
import { MentalComponent } from './components/resources/mental/mental.component';
import { CrimeComponent } from './components/resources/crime/crime.component';
import { InsecurityComponent } from './components/resources/insecurity/insecurity.component';
import { TechComponent } from './components/resources/tech/tech.component';
import { FinancialComponent } from './components/resources/financial/financial.component';
import { TransportationComponent } from './components/resources/transportation/transportation.component';
import { TestComponent } from './components/test/test.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostComponent,
    SinglepostComponent,
    AddpostComponent,
    HeaderComponent,
    LogoutComponent,
    ErrorComponent,
    ResourcesComponent,
    UploadComponent,
    ClassComponent,
    MentalComponent,
    CrimeComponent,
    InsecurityComponent,
    TechComponent,
    FinancialComponent,
    TransportationComponent,
    TestComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
