import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EceComponent } from './ece/ece.component';
import { EeeComponent } from './eee/eee.component';
import { MechComponent } from './mech/mech.component';
import { CivilComponent } from './civil/civil.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DigitallogicComponent } from './digitallogic/digitallogic.component';
import { CaoComponent } from './cao/cao.component';
import { OsComponent } from './os/os.component';
import { CnComponent } from './cn/cn.component';
import { CseComponent } from './cse/cse.component';
import { EdcComponent } from './edc/edc.component';
import { AcComponent } from './ac/ac.component';
import { DcComponent } from './dc/dc.component';
import { NetworksComponent } from './networks/networks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EceComponent,
    EeeComponent,
    MechComponent,
    CivilComponent,
    LoginComponent,
    RegisterComponent,
    DigitallogicComponent,
    CaoComponent,
    OsComponent,
    CnComponent,
    CseComponent,
    EdcComponent,
    AcComponent,
    DcComponent,
    NetworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
