import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { authRoutes } from './auth.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authRoutes)],
  exports: [LoginComponent],
  declarations: [LoginComponent],
})
export class AuthModule {}
