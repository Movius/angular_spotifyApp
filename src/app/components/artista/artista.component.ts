import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any;
  loading: boolean;
  topTracks: any[] = [];
  error: boolean = false;
  errorMsj: string = '';

  constructor(
    private spotifyService: SpotifyService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.loading = true;
      this.spotifyService.getArtistById(params.id)
        .subscribe((data: any) => {
          this.artista = data;
          this.loading = false;
          this.error = false;
        }, (error) => {
          this.error = true;
          this.errorMsj = error.error.error.message;
          this.loading = false;
        });

      this.spotifyService.getArtistTopTracks(params.id)
        .subscribe((data: any) => {
          this.topTracks = data;
          this.loading = false;
          this.error = false;
        }, (error) => {
          this.error = true;
          this.errorMsj = error.error.error.message;
          this.loading = false;
        });
    });
  }

  regresar() {
    this.router.navigate(['home']);
  }

}
