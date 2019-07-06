import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RechrgComponent } from './rechrg/rechrg.component';
import { TarrifComponent } from './tarrif/tarrif.component';
import { FormsModule } from '@angular/forms';
import { PrepaidtariffComponent } from './prepaidtariff/prepaidtariff.component';
import { PostpaidtariffComponent } from './postpaidtariff/postpaidtariff.component';
import { InternettariffComponent } from './internettariff/internettariff.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OffersComponent } from './offers/offers.component';
import { PrepaidoffersComponent} from './prepaidoffers/prepaidoffers.component';
import { PostpaidoffersComponent} from './postpaidoffers/postpaidoffers.component';
import { DongleoffersComponent} from './dongleoffers/dongleoffers.component';
import { WalletComponent } from './wallet/wallet.component';
import { CurrentbalanceComponent } from './currentbalance/currentbalance.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { AddmoneywalletComponent } from './addmoneywallet/addmoneywallet.component';
import { PaybillsComponent } from './paybills/paybills.component';


@NgModule({
  declarations: [
    AppComponent,
    RechrgComponent,
    TarrifComponent,
    PrepaidtariffComponent,
    PostpaidtariffComponent,
    InternettariffComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    OffersComponent,
    PrepaidoffersComponent,
    PostpaidoffersComponent,
    DongleoffersComponent,
    WalletComponent,
    CurrentbalanceComponent,
    TransactionhistoryComponent,
    AddmoneywalletComponent,
    PaybillsComponent
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
