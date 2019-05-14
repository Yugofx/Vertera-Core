import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorNotFound } from './not-found';
import { NotFoundRouter } from './not-found.router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NotFoundRouter,
  ],
  declarations: [WorNotFound],
})
export class NotFoundModule {}
