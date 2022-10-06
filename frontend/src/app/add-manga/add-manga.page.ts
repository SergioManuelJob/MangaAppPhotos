import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Manga } from '../interfaces/manga';
import { MangaService } from '../services/manga.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.page.html',
  styleUrls: ['./add-manga.page.scss'],
})
export class AddMangaPage implements OnInit {

  createMangaFg: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(private mangaService: MangaService, 
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    public formBuilder: FormBuilder) 
     {
      
  }

  ionViewWillEnter() {
    this.createMangaFg.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }

  ngOnInit() {
    this.createMangaFg = this.formBuilder.group({
      title: [''],
      pages: [''],
      volume: [''],
      genre: [''],
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
    if (!this.createMangaFg.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      this.mangaService.createManga(this.createMangaFg.value, blob).subscribe(data => {
        console.log("Photo sent!");
        this.router.navigate(["/home"]);
      })
    } 
  }

  goBackHome(){
    this.router.navigate(["/home"]);
  }

}
