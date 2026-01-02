import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError, switchMap } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service listo');
  }

  getSpotifyToken(): Observable<string> {
    const body = new HttpParams().set('grant_type', 'client_credentials');
    const headers = new HttpHeaders({
      'Authorization': environment.spotifyKey,
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post('https://accounts.spotify.com/api/token', body.toString(), { headers })
      .pipe(
        map((data: any) => {
          this.token = `Bearer ${data.access_token}`;
          return this.token;
        })
      );
  }

  private token = '';

  private urlBase = 'https://api.spotify.com/v1/';

  getQuery(query: string) {
    const url = this.urlBase + query;

    // Use a function to get headers so it always uses the LATEST token
    const getHeaders = () => new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get(url, { headers: getHeaders() })
      .pipe(
        catchError(error => {
          // If 401 (Unauthorized) OR token is missing/invalid
          if (error.status === 401 || !this.token) {
            console.warn('Token inválido o expirado, obteniendo uno nuevo...');
            return this.getSpotifyToken().pipe(
              switchMap(newToken => {
                return this.http.get(url, { headers: new HttpHeaders({ 'Authorization': newToken }) });
              })
            );
          }
          return throwError(error);
        }),
        map((data: any) => data)
      );
  }

  getNewReleases() {
    return this.getQuery(`browse/new-releases`)
      .pipe(map((data: any) => data.albums.items));
  }

  getArtist(termino: string, tipo: string = 'artist') {
    return this.getQuery(`search?q=${termino}&type=${tipo}`)
      .pipe(map((data: any) => data.artists.items));
  }

  getArtistById(id: string) {
    return this.getQuery(`artists/${id}`)
      .pipe(map((data: any) => data));
  }

  getArtistTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=US`)
      .pipe(map((data: any) => data.tracks));
  }
}
