import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';

const routes: Routes = [
  { path: '', component: LazyComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {}
