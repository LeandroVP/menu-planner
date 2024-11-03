import { NgModule } from '@angular/core';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { SharedModule } from '../shared/shared.module';
import { TabsPage } from './tabs.page';

@NgModule({
  imports: [SharedModule, TabsPageRoutingModule],
  declarations: [TabsPage],
})
export class TabsPageModule {}
