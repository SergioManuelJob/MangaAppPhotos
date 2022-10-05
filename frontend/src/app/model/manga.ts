export class Manga {
    id?: number;
    title: string;
    pages: number;
    volume: number;
    genre: string;
    imagen: string;

    constructor(id: number, title: string, pages: number, volume: number, genre: string, imagen: string){
        this.id = id;
        this.title = title;
        this.pages = pages;
        this.volume = volume;
        this.genre = genre;
        this.imagen = imagen;
    }
}
