import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book.component';
import { CountComponent } from './count/count.component';

const routes: Routes = [
  { path: '', component: BookComponent},
  { path: 'count', component: CountComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
