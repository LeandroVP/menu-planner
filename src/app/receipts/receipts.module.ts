import { NgModule } from '@angular/core';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ReceiptsPage } from './receipts.page';

import { SharedModule } from '../shared/shared.module';
import { ReceiptsPageRoutingModule } from './receipts-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ExploreContainerComponentModule,
    ReceiptsPageRoutingModule,
  ],
  declarations: [ReceiptsPage],
})
export class ReceiptsPageModule {}
