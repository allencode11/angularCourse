import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AuthModalComponent,
  ],
  exports: [
    AuthModalComponent,
    SharedModule
  ],
  imports: [
    CommonModule,
  ],
})
export class UserModule { }
