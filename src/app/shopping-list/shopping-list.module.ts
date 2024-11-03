import { NgModule } from '@angular/core';
import { ShoppingLlistPage } from './shopping-list.page';

import { SharedModule } from '../shared/shared.module';
import { ShoppingLlistPageRoutingModule } from './shopping-list-routing.module';

@NgModule({
  imports: [SharedModule, ShoppingLlistPageRoutingModule],
  declarations: [ShoppingLlistPage],
})
export class ShoppingLlistPageModule {}
