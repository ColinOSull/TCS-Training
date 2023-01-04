import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PensionersComponent } from './Components/pensioners/pensioners.component';
import { PensionerService } from './Services/pensioner.service';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PensionerFormComponent } from './Components/pensioner-form/pensioner-form.component';
import { LoginComponent } from './Components/login/login.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { RegisterUserComponent } from './Components/register-user/register-user.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PensionersComponent,
    PensionerFormComponent,
    LoginComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
