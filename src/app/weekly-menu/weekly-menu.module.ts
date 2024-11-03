import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { WeeklyMenuPage } from './weekly-menu.page';

import { WeeklyMenuPageRoutingModule } from './weekly-menu-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    WeeklyMenuPageRoutingModule,
  ],
  declarations: [WeeklyMenuPage],
})
export class WeeklyMenuPageModule {}
