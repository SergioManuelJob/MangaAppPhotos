import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Manga } from '../interfaces/manga';
import { MangaService } from '../services/manga.service';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  mangas: any = []
  searchManga: string;
 
  constructor(private mangaService: MangaService, private router: Router) {
    this.getAllMangas();
  }
 
  goToAddManga(){
    this.router.navigateByUrl("/add-manga");
  }

  getAllMangas(){
    this.mangaService.getAllMangas().subscribe(data => {
      this.mangas = data;
    });
  }

  // getOneManga(id: number){
  //   this.mangaService.getOneManga(id).subscribe(data => {
  //     this.mangas = data;
  //   })
  // }

  // deleteManga(id: number){
  //   this.mangaService.deleteManga(id).subscribe(data =>{});
  // }
  
}

