import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRequestGetComponent } from './test-request-get/test-request-get.component';

@NgModule({
  declarations: [TestRequestGetComponent],
  imports: [CommonModule],
  // * --export=true
  exports: [TestRequestGetComponent],
})
export class TestRequestModule {}
