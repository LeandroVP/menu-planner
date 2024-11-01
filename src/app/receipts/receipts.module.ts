import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReceiptsPage } from './receipts.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ReceiptsPageRoutingModule } from './receipts-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ExploreContainerComponentModule,
    ReceiptsPageRoutingModule,
  ],
  declarations: [ReceiptsPage],
})
export class ReceiptsPageModule {}
