import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manga } from '../interfaces/manga';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
 
  endpoint: string = "http://localhost:8080/api/mangas"
 
  constructor(private httpClient: HttpClient) { }
 
  getAllMangas(){
    return this.httpClient.get(this.endpoint);
  }

  getOneManga(id: number){
    return this.httpClient.get<Manga>(this.endpoint + "/" + id);  
  }

  deleteManga(id: number){
    return this.httpClient.delete<Manga>(this.endpoint + "/" + id);
  }

  updateManga(id: number, manga: Manga, blob){
    let data = new FormData();
    data.append("title", manga.title)
    data.append("pages", manga.pages.toString())
    data.append("volume",manga.volume.toString())
    data.append("genre",manga.genre)
    data.append("imagen", blob)
    return this.httpClient.put(this.endpoint + "/" + id, data);
  }

  createManga(manga: Manga, blob){
    let formData = new FormData();
    formData.append("title", manga.title)
    formData.append("pages", manga.pages.toString())
    formData.append("volume",manga.volume.toString())
    formData.append("genre",manga.genre)
    formData.append("imagen", blob)
    return this.httpClient.post(this.endpoint, formData);
  }
  
}
