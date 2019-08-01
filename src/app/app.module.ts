import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletComponent } from './wallet/wallet.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { TariffComponent } from './tariff/tariff.component';
import { SignupComponent } from './signup/signup.component';
import { RechargeComponent } from './recharge/recharge.component';
import { ProfileComponent } from './profile/profile.component';
import { PrepaidtariffComponent } from './prepaidtariff/prepaidtariff.component';
import { PrepaidoffersComponent } from './prepaidoffers/prepaidoffers.component';
import { PostpaidtariffComponent } from './postpaidtariff/postpaidtariff.component';
import { PostpaidoffersComponent } from './postpaidoffers/postpaidoffers.component';
import { PaybillsComponent } from './paybills/paybills.component';
import { OffersComponent } from './offers/offers.component';
import { LoginComponent } from './login/login.component';
import { InternettariffComponent } from './internettariff/internettariff.component';
import { DongleoffersComponent } from './dongleoffers/dongleoffers.component';
import { CurrentbalanceComponent } from './currentbalance/currentbalance.component';
import { AddmoneywalletComponent } from './addmoneywallet/addmoneywallet.component';
import { TransactionComponent } from './transaction/transaction.component'

@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    TransactionhistoryComponent,
    TariffComponent,
    SignupComponent,
    RechargeComponent,
    ProfileComponent,
    PrepaidtariffComponent,
    PrepaidoffersComponent,
    PostpaidtariffComponent,
    PostpaidoffersComponent,
    PaybillsComponent,
    OffersComponent,
    LoginComponent,
    InternettariffComponent,
    DongleoffersComponent,
    CurrentbalanceComponent,
    AddmoneywalletComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
