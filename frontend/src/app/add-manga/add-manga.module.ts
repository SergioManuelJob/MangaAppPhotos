import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMangaPageRoutingModule } from './add-manga-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AddMangaPage } from './add-manga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMangaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddMangaPage]
})
export class AddMangaPageModule {}
