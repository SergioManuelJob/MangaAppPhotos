import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMangaPage } from './add-manga.page';

const routes: Routes = [
  {
    path: '',
    component: AddMangaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMangaPageRoutingModule {}
