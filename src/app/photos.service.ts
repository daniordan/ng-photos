import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  // Check Unsplash docu to cunstruct the url
  // https://unsplash.com/documentation#location
  // https://unsplash.com/documentation#get-a-random-photo
  // https://unsplash.com/documentation#public-authentication
  // plus check the get() method definition to see how to use the headers for authorization to use API
  getPhoto() {
    return this.http.get<UnsplashResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization:
            'Client-ID bqMjgsRWLacHM9s3hqF5a0z_OwlnxacXdM5CNjm4Dx8',
        },
      }
    );
  }
}
