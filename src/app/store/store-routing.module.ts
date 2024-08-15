import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const STORE_ROUTES: Routes = [
  {
    path: '',
    component: HeaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(STORE_ROUTES)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
