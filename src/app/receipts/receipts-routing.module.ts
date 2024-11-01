import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiptsPage } from './receipts.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiptsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptsPageRoutingModule { }
