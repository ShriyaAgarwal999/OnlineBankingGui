import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FirstPageComponent } from './first-page/first-page.component';

import { Routes,RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { DepositPageComponent } from './deposit-page/deposit-page.component';
import { WithdrawPageComponent } from './withdraw-page/withdraw-page.component';
import { TransferPageComponent } from './transfer-page/transfer-page.component';
import { RecipientPageComponent } from './recipient-page/recipient-page.component';
import { TransferDetailsComponent } from './transfer-details/transfer-details.component';

const appRoutes: Routes=[
{path: '', component: FirstPageComponent},
{path: 'home-page', component: HomePageComponent},
{path: 'registration-page', component: RegistrationPageComponent},
{path: 'deposit-page', component: DepositPageComponent},
{path: 'withdraw-page', component: WithdrawPageComponent},
{path: 'transfer-page', component: TransferPageComponent},
{path: 'recipient-page', component: RecipientPageComponent},
{path: 'transfer-details', component: TransferDetailsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistrationPageComponent,
    FirstPageComponent,
    DepositPageComponent,
    WithdrawPageComponent,
    TransferPageComponent,
    RecipientPageComponent,
    TransferDetailsComponent
  ],
  imports: [
    BrowserModule,
RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
