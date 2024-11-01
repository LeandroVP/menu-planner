import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingLlistPage } from './shopping-list.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingLlistPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingLlistPageRoutingModule {}
