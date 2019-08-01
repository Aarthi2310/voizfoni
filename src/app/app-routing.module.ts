import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RechargeComponent } from './recharge/recharge.component';
import { TariffComponent } from './tariff/tariff.component';
import { PrepaidtariffComponent } from './prepaidtariff/prepaidtariff.component';
import { PostpaidtariffComponent } from './postpaidtariff/postpaidtariff.component';
import { InternettariffComponent } from './internettariff/internettariff.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OffersComponent } from './offers/offers.component';
import { WalletComponent } from './wallet/wallet.component';
import { CurrentbalanceComponent } from './currentbalance/currentbalance.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { AddmoneywalletComponent } from './addmoneywallet/addmoneywallet.component';
import { PaybillsComponent } from './paybills/paybills.component';
import { PrepaidoffersComponent } from './prepaidoffers/prepaidoffers.component';
import { PostpaidoffersComponent } from './postpaidoffers/postpaidoffers.component';
import { DongleoffersComponent } from './dongleoffers/dongleoffers.component';
import { TransactionComponent } from './transaction/transaction.component'


const routes: Routes = [{path:'recharge', component:RechargeComponent},
{path:'tariff', component:TariffComponent},
{path:'prepaidtariff', component:PrepaidtariffComponent},
{path:'postpaidtariff', component:PostpaidtariffComponent},
{path:'internettariff', component:InternettariffComponent},
{path:'profile', component:ProfileComponent},
{path:'login', component:LoginComponent},
{path:'signup', component:SignupComponent},
{path:'offers',component:OffersComponent},

{path:'prepaidoffers',component:PrepaidoffersComponent},
{path:'postpaidoffers',component:PostpaidoffersComponent},
{path:'dongleoffers',component:DongleoffersComponent},
{path:'wallet',component:WalletComponent},
{path:'currentbalance',component:CurrentbalanceComponent},
{path:'transactionhistory',component:TransactionhistoryComponent},
{path:'addmoneywallet',component:AddmoneywalletComponent},
{path:'paybills',component:PaybillsComponent},
{path:'transaction',component:TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
