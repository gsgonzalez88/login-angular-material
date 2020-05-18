import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PrivateComponent } from './pages/private/private.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/authentication/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './pages/success.component'
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PrivateComponent,
    SignupComponent,
    NavBarComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [SuccessComponent]
})
export class AppModule { }
