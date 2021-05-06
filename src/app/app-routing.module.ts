import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcComponent } from './ac/ac.component';
import { CaoComponent } from './cao/cao.component';
import { CivilComponent } from './civil/civil.component';
import { CnComponent } from './cn/cn.component';
import { CseComponent } from './cse/cse.component';
import { DcComponent } from './dc/dc.component';
import { DigitallogicComponent } from './digitallogic/digitallogic.component';
import { EceComponent } from './ece/ece.component';
import { EdcComponent } from './edc/edc.component';
import { EeeComponent } from './eee/eee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MechComponent } from './mech/mech.component';
import { NetworksComponent } from './networks/networks.component';
import { OsComponent } from './os/os.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"HOME",component:HomeComponent},
  {path:"cse",component:CseComponent,
  children:[
    {path:"cao",component:CaoComponent},
    {path:"os",component:OsComponent},
    {path:"cn",component:CnComponent}
  ]},
  {path:"ece",component:EceComponent,
  children:[
    {path:"edc",component:EdcComponent},
    {path:"ac",component:AcComponent},
    {path:"dc",component:DcComponent},
    {path:"networks",component:NetworksComponent}
  ]},
  {path:"eee",component:EeeComponent},
  {path:"mech",component:MechComponent},
  {path:"civil",component:CivilComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path: '**',component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
