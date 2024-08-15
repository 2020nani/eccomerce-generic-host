import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { StoreRoutingModule } from './store-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SharedModule, StoreRoutingModule],
})
export class StoreModule {}
