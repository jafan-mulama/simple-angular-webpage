import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getAuthors(){
    return [ 'Author 1', 'cAuthor 2', 'Author 3'];
}
}
