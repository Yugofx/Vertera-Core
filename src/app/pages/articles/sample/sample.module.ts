import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample';
import { SampleRouter } from './sample.router';

@NgModule({
  imports: [
    CommonModule,
    SampleRouter,
  ],
  declarations: [SampleComponent],
})
export class SampleModule {}
