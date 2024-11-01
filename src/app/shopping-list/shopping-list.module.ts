import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingLlistPage } from './shopping-list.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ShoppingLlistPageRoutingModule } from './shopping-list-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ShoppingLlistPageRoutingModule,
  ],
  declarations: [ShoppingLlistPage],
})
export class ShoppingLlistPageModule {}
