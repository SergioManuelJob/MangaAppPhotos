import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MangaService } from '../services/manga.service';

@Component({
  selector: 'app-update-manga',
  templateUrl: './update-manga.page.html',
  styleUrls: ['./update-manga.page.scss'],
})
export class UpdateMangaPage implements OnInit {

  updateMangaFg: FormGroup;
  id: any;

  constructor(private mangaService: MangaService, 
    private activatedRoute: ActivatedRoute,
     private router: Router,
     public formBuilder: FormBuilder) 
     {
      this.id = this.activatedRoute.snapshot.paramMap.get("id"); 
  }

  ngOnInit() {
    this.fetchManga(this.id);
    this.updateMangaFg = this.formBuilder.group({
      title: [''],
      pages: [''],
      volume: [''],
      genre: [''],
      imagen: ['']
    })
  }
  
  fetchManga(id: number){
    this.mangaService.getOneManga(id).subscribe(data => {
      this.updateMangaFg.setValue({
        title: data['title'],
        pages: data['pages'],
        volume: data['volume'],
        genre: data['genre'],
        imagen: data['imagen']  
      })
    })
  }

  onSubmit() {
    if (!this.updateMangaFg.valid){
      return false;
    } else {
      this.mangaService.updateManga(this.id, this.updateMangaFg.value).subscribe(() => {
        this.updateMangaFg.reset();
        this.router.navigate(["/home"]);
      })
    }  

    
  }

  goBackHome(){
    this.router.navigate(["/home"]);
  }

}
