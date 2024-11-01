import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeeklyMenuPage } from './weekly-menu.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyMenuPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyMenuPageRoutingModule {}
