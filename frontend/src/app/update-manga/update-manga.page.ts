import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MangaService } from '../services/manga.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-update-manga',
  templateUrl: './update-manga.page.html',
  styleUrls: ['./update-manga.page.scss'],
})
export class UpdateMangaPage implements OnInit {

  updateMangaFg: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";
  id: any;

  constructor(private mangaService: MangaService, 
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    public formBuilder: FormBuilder)  
     {
      this.id = this.activatedRoute.snapshot.paramMap.get("id"); 
  }

  ionViewWillEnter() {
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }

  ngOnInit() {
    this.fetchManga(this.id);
    this.updateMangaFg = this.formBuilder.group({
      title: [''],
      pages: [''],
      volume: [''],
      genre: ['']
    })
  }
  
  fetchManga(id: number){
    this.mangaService.getOneManga(id).subscribe(data => {
      this.updateMangaFg.setValue({
        title: data['title'],
        pages: data['pages'],
        volume: data['volume'],
        genre: data['genre']
      })
    })
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

  async onSubmit() {
    this.isSubmitted = true;
    if (!this.updateMangaFg.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      this.mangaService.createManga(this.id, this.updateMangaFg.value).subscribe(data => {
        console.log("Photo sent!");
        this.router.navigateByUrl("/home");
      })
    } 
  }

  goBackHome(){
    this.router.navigate(["/home"]);
  }

}
