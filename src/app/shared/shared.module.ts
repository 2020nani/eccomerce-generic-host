import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumPercentagePipe } from './pipes/sumPercentage.pipe';
import { StoreModule } from '../store/store.module';

@NgModule({
  declarations: [SumPercentagePipe],
  imports: [CommonModule],
  exports: [SumPercentagePipe],
})
export class SharedModule {}
