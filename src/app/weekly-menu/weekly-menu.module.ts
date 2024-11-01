import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeeklyMenuPage } from './weekly-menu.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

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
