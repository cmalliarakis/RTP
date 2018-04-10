import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrencyConvertorPage } from './currency-convertor';

@NgModule({
  declarations: [
    CurrencyConvertorPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrencyConvertorPage),
  ],
})
export class CurrencyConvertorPageModule {}
