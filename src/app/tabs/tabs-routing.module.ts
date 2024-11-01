import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'weekly-menu',
        loadChildren: () =>
          import('../weekly-menu/weekly-menu.module').then(
            (m) => m.WeeklyMenuPageModule
          ),
      },
      {
        path: 'shopping-list',
        loadChildren: () =>
          import('../shopping-list/shopping-list.module').then(
            (m) => m.ShoppingLlistPageModule
          ),
      },
      {
        path: 'receipts',
        loadChildren: () =>
          import('../receipts/receipts.module').then(
            (m) => m.ReceiptsPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/weekly-menu',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/weekly-menu',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
